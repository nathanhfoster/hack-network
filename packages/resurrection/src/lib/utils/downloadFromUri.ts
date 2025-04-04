/**
 * Downloads a file from the specified URI and saves it with the given filename.
 *
 * @param uri - The URI of the file to download.
 * @param filename - The name to save the downloaded file as. Defaults to "current.csv".
 *
 * @remarks
 * This function uses the Fetch API to retrieve the file as a blob and creates a temporary
 * anchor element to trigger the download in the browser. It also handles cleanup by
 * removing the temporary anchor element after the download is triggered.
 *
 * @throws Will log an error to the console if the fetch operation fails.
 */
const downloadFromUri = async (uri: string, filename = 'current.csv') => {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = downloadUrl;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error(error);
  }
};

export default downloadFromUri;
