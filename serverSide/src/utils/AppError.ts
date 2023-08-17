class AppError extends Error {
  statusCode: number;
  errors: Error[];

  constructor(message: string, statusCode: number, errors: Error[] = []) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

export default AppError;
