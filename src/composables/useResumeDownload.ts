export const RESUME_URL = '/Curriculo_Webert_Fernandes.pdf'
export const RESUME_FILENAME = 'Curriculo_Webert_Fernandes.pdf'

export function useResumeDownload() {
  const downloadResume = async (): Promise<void> => {
    try {
      const response = await globalThis.fetch(RESUME_URL)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }
      const blob = await response.blob()
      const blobUrl = globalThis.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = RESUME_FILENAME
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      globalThis.setTimeout(() => {
        globalThis.URL.revokeObjectURL(blobUrl)
      }, 1000)
    } catch {
      const fallbackLink = document.createElement('a')
      fallbackLink.href = RESUME_URL
      fallbackLink.download = RESUME_FILENAME
      fallbackLink.target = '_blank'
      fallbackLink.rel = 'noopener noreferrer'
      document.body.appendChild(fallbackLink)
      fallbackLink.click()
      document.body.removeChild(fallbackLink)
    }
  }

  return {
    resumeUrl: RESUME_URL,
    resumeFilename: RESUME_FILENAME,
    downloadResume,
  }
}
