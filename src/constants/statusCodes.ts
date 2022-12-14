export enum StatusCodes {
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthenticationRequired = 407,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  LengthRequired = 411,
  PreconditionFailed = 412,
  PayloadTooLarge = 413,
  RequestURITooLong = 414,
  UnsupportedMediaType = 415,
  RequestedRangeNotSatisfiable = 416,
  ExpectationFailed = 417,
  Imateapot = 418,
  AuthenticationFaild = 419,
  MisdirectedRequest = 421,
  UnprocessableEntity = 422,
  Locked = 423,
  FailedDependency = 424,
  UpgradeRequired = 426,
  PreconditionRequired = 428,
  TooManyRequests = 429,
  RequestHeaderFieldsTooLarge = 431,
  ConnectionClosedWithoutResponse = 444,
  UnavailableForLegalReasons = 451,
  ClientClosedRequest = 499,
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  HTTPVersionNotSupported = 505,
  VariantAlsoNegotiates = 506,
  InsufficientStorage = 507,
  LoopDetected = 508,
  NotExtended = 510,
  NetworkAuthenticationRequired = 511,
  NetworkConnectTimeoutError = 599,
  TwoFactor = 657,
  UntrustedDevice = 658,
  TwoFactorAndUntrustedDevice = 659,
  UserRegistrationNotCompleted = 660,
  UserIsNotActive = 661,
  IsLockedOut = 662,
  IsNotAllowed = 663,
  InvalidUserNameOrPassword = 664,
  FaildTwoFa = 665,
  UserTrustedDevice = 670,
  UserIsSuspended = 709,
}
