/**
 * A FileHelper.
 */
export default class FileHelper {
  /**
   * Upload a file using the API
   */
  static async writeFile(fileSlug: string, content: string): Promise<Response> {
    return fetch(`http://localhost:8080/file/${fileSlug}`, {
      method: "POST",
      body: JSON.stringify({
        content,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }

  /**
   * Remove a file using the API
   */
  static async deleteFile(fileSlug: string): Promise<Response> {
    // TODO: move to helper
    return fetch(`http://localhost:8080/delete-file/${fileSlug}`);
  }

  static async fetchFiles(): Promise<Array<string>> {
    return (await fetch("http://localhost:8080/files")).json();
  }
}
