// Mirrors SharedKernel.Shared.Error / ErrorType from the backend, so every
// feature can handle failures the same way instead of parsing ad hoc shapes.

export type ErrorType =
  | "Validation"
  | "Problem"
  | "Failure"
  | "NotFound"
  | "Conflict";

export interface ApiError {
  code: string;
  message: string;
  errorType: ErrorType;
}

// The backend's ResultT<T> unwraps to either the value or an error on the
// wire (via a ProblemDetails-style response or a { error } envelope,
// depending on how your controllers serialize failures). This type models
// the failure envelope specifically; success responses just return T
// directly from the endpoint.
export interface ApiErrorResponse {
  error: ApiError;
}

export function isApiErrorResponse(payload: unknown): payload is ApiErrorResponse {
  return (
    typeof payload === "object" &&
    payload !== null &&
    "error" in payload &&
    typeof (payload as ApiErrorResponse).error?.code === "string"
  );
}

// Maps an ErrorType to how the UI should surface it. Centralizing this means
// a new error type only needs to be taught here once.
export function errorTypeToToastVariant(
  errorType: ErrorType,
): "warning" | "error" | "info" {
  switch (errorType) {
    case "Validation":
      return "warning";
    case "NotFound":
      return "info";
    case "Conflict":
    case "Problem":
    case "Failure":
    default:
      return "error";
  }
}
