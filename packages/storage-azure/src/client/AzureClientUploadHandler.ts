'use client'
import { createClientUploadHandler } from '@payloadcms/plugin-cloud-storage/client'

export const AzureClientUploadHandler = createClientUploadHandler({
  handler: async ({ apiRoute, collectionSlug, file, prefix, serverHandlerPath, serverURL }) => {
    const response = await fetch(`${serverURL}${apiRoute}${serverHandlerPath}`, {
      body: JSON.stringify({
        collectionSlug,
        filename: file.name,
        mimeType: file.type,
      }),
      credentials: 'include',
      method: 'POST',
    })

    const { url } = (await response.json()) as {
      url: string
    }

    await fetch(url, {
      body: file,
      headers: {
        'Content-Length': file.size.toString(),
        'Content-Type': file.type,
        // Required for azure
        'x-ms-blob-type': 'BlockBlob',
      },
      method: 'PUT',
    })

    return { prefix }
  },
})
