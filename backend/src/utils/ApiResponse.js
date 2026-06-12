export class ApiResponse {
  constructor(statusCode, data = null, message = "Success") {
    this.success = statusCode >= 200 && statusCode < 300;
    this.data = data;
    this.message = message;
  }
}
