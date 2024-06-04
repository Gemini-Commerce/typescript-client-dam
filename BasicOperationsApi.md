# .BasicOperationsApi

All URIs are relative to *https://dam.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchUploadAssets**](BasicOperationsApi.md#batchUploadAssets) | **POST** /dam.Dam/BatchUploadAssets | Batch Upload Assets
[**batchUploadAssets_0**](BasicOperationsApi.md#batchUploadAssets_0) | **POST** /dam/batch_upload_assets | Batch Upload Assets
[**createAsset**](BasicOperationsApi.md#createAsset) | **POST** /dam.Dam/CreateAsset | Create Asset
[**createAsset_0**](BasicOperationsApi.md#createAsset_0) | **POST** /dam/create_asset | Create Asset
[**getAssetByCode**](BasicOperationsApi.md#getAssetByCode) | **POST** /dam.Dam/GetAssetByCode | Get Asset By Code
[**getAssetByCode_0**](BasicOperationsApi.md#getAssetByCode_0) | **POST** /dam/get_asset_by_code | Get Asset By Code
[**listAssets**](BasicOperationsApi.md#listAssets) | **POST** /dam.Dam/ListAssets | List Assets
[**listAssetsByCodes**](BasicOperationsApi.md#listAssetsByCodes) | **POST** /dam.Dam/ListAssetsByCodes | List Assets By Codes
[**listAssetsByCodes_0**](BasicOperationsApi.md#listAssetsByCodes_0) | **POST** /dam/list_assets_by_codes | List Assets By Codes
[**listAssetsByIds**](BasicOperationsApi.md#listAssetsByIds) | **POST** /dam.Dam/ListAssetsByIds | List Assets By Ids
[**listAssetsByIds_0**](BasicOperationsApi.md#listAssetsByIds_0) | **POST** /dam/list_assets_by_ids | List Assets By Ids
[**listAssets_0**](BasicOperationsApi.md#listAssets_0) | **POST** /dam/list_assets | List Assets
[**updateAsset**](BasicOperationsApi.md#updateAsset) | **POST** /dam.Dam/UpdateAsset | Update Asset
[**updateAsset_0**](BasicOperationsApi.md#updateAsset_0) | **POST** /dam/update_asset | Update Asset


# **batchUploadAssets**
> DamBatchUploadAssetsResponse batchUploadAssets(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiBatchUploadAssetsRequest = {
  // DamBatchUploadAssetsRequest
  body: {
    tenantId: "tenantId_example",
    files: [
      {
        filename: "filename_example",
        size: "size_example",
        mimeType: "mimeType_example",
      },
    ],
  },
};

apiInstance.batchUploadAssets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **DamBatchUploadAssetsRequest**|  |


### Return type

**DamBatchUploadAssetsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | When an endpoint receives a request with an invalid or unauthorized JWT token, a 401 error (Unauthorized) is thrown. This error indicates that the client is not authenticated or lacks the necessary permissions to access the requested resource. The server responds with the 401 error to enforce security measures and restrict unauthorized access. Clients should handle this error by taking appropriate actions, such as re-authenticating or obtaining a valid token, to gain authorized access. |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **batchUploadAssets_0**
> DamBatchUploadAssetsResponse batchUploadAssets_0(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiBatchUploadAssets0Request = {
  // DamBatchUploadAssetsRequest
  body: {
    tenantId: "tenantId_example",
    files: [
      {
        filename: "filename_example",
        size: "size_example",
        mimeType: "mimeType_example",
      },
    ],
  },
};

apiInstance.batchUploadAssets_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **DamBatchUploadAssetsRequest**|  |


### Return type

**DamBatchUploadAssetsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | When an endpoint receives a request with an invalid or unauthorized JWT token, a 401 error (Unauthorized) is thrown. This error indicates that the client is not authenticated or lacks the necessary permissions to access the requested resource. The server responds with the 401 error to enforce security measures and restrict unauthorized access. Clients should handle this error by taking appropriate actions, such as re-authenticating or obtaining a valid token, to gain authorized access. |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createAsset**
> DamAsset createAsset(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiCreateAssetRequest = {
  // DamCreateAssetRequest
  body: {
    tenantId: "tenantId_example",
    type: "UNKNOWN",
    code: "code_example",
    metadata: [
      {
        key: "key_example",
        value: "value_example",
      },
    ],
    origin: {
      url: "url_example",
      type: "EXTERNAL",
    },
  },
};

apiInstance.createAsset(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **DamCreateAssetRequest**|  |


### Return type

**DamAsset**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | When an endpoint receives a request with an invalid or unauthorized JWT token, a 401 error (Unauthorized) is thrown. This error indicates that the client is not authenticated or lacks the necessary permissions to access the requested resource. The server responds with the 401 error to enforce security measures and restrict unauthorized access. Clients should handle this error by taking appropriate actions, such as re-authenticating or obtaining a valid token, to gain authorized access. |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createAsset_0**
> DamAsset createAsset_0(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiCreateAsset0Request = {
  // DamCreateAssetRequest
  body: {
    tenantId: "tenantId_example",
    type: "UNKNOWN",
    code: "code_example",
    metadata: [
      {
        key: "key_example",
        value: "value_example",
      },
    ],
    origin: {
      url: "url_example",
      type: "EXTERNAL",
    },
  },
};

apiInstance.createAsset_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **DamCreateAssetRequest**|  |


### Return type

**DamAsset**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | When an endpoint receives a request with an invalid or unauthorized JWT token, a 401 error (Unauthorized) is thrown. This error indicates that the client is not authenticated or lacks the necessary permissions to access the requested resource. The server responds with the 401 error to enforce security measures and restrict unauthorized access. Clients should handle this error by taking appropriate actions, such as re-authenticating or obtaining a valid token, to gain authorized access. |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAssetByCode**
> DamAsset getAssetByCode(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiGetAssetByCodeRequest = {
  // DamGetAssetByCodeRequest
  body: {
    tenantId: "tenantId_example",
    code: "code_example",
  },
};

apiInstance.getAssetByCode(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **DamGetAssetByCodeRequest**|  |


### Return type

**DamAsset**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | When an endpoint receives a request with an invalid or unauthorized JWT token, a 401 error (Unauthorized) is thrown. This error indicates that the client is not authenticated or lacks the necessary permissions to access the requested resource. The server responds with the 401 error to enforce security measures and restrict unauthorized access. Clients should handle this error by taking appropriate actions, such as re-authenticating or obtaining a valid token, to gain authorized access. |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAssetByCode_0**
> DamAsset getAssetByCode_0(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiGetAssetByCode0Request = {
  // DamGetAssetByCodeRequest
  body: {
    tenantId: "tenantId_example",
    code: "code_example",
  },
};

apiInstance.getAssetByCode_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **DamGetAssetByCodeRequest**|  |


### Return type

**DamAsset**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | When an endpoint receives a request with an invalid or unauthorized JWT token, a 401 error (Unauthorized) is thrown. This error indicates that the client is not authenticated or lacks the necessary permissions to access the requested resource. The server responds with the 401 error to enforce security measures and restrict unauthorized access. Clients should handle this error by taking appropriate actions, such as re-authenticating or obtaining a valid token, to gain authorized access. |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAssets**
> DamListAssetsResponse listAssets(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiListAssetsRequest = {
  // DamListAssetsRequest
  body: {
    tenantId: "tenantId_example",
    pageSize: 1,
    pageToken: "pageToken_example",
  },
};

apiInstance.listAssets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **DamListAssetsRequest**|  |


### Return type

**DamListAssetsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | When an endpoint receives a request with an invalid or unauthorized JWT token, a 401 error (Unauthorized) is thrown. This error indicates that the client is not authenticated or lacks the necessary permissions to access the requested resource. The server responds with the 401 error to enforce security measures and restrict unauthorized access. Clients should handle this error by taking appropriate actions, such as re-authenticating or obtaining a valid token, to gain authorized access. |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAssetsByCodes**
> DamListAssetsByCodesResponse listAssetsByCodes(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiListAssetsByCodesRequest = {
  // DamListAssetsByCodesRequest
  body: {
    tenantId: "tenantId_example",
    codes: [
      "codes_example",
    ],
  },
};

apiInstance.listAssetsByCodes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **DamListAssetsByCodesRequest**|  |


### Return type

**DamListAssetsByCodesResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | When an endpoint receives a request with an invalid or unauthorized JWT token, a 401 error (Unauthorized) is thrown. This error indicates that the client is not authenticated or lacks the necessary permissions to access the requested resource. The server responds with the 401 error to enforce security measures and restrict unauthorized access. Clients should handle this error by taking appropriate actions, such as re-authenticating or obtaining a valid token, to gain authorized access. |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAssetsByCodes_0**
> DamListAssetsByCodesResponse listAssetsByCodes_0(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiListAssetsByCodes0Request = {
  // DamListAssetsByCodesRequest
  body: {
    tenantId: "tenantId_example",
    codes: [
      "codes_example",
    ],
  },
};

apiInstance.listAssetsByCodes_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **DamListAssetsByCodesRequest**|  |


### Return type

**DamListAssetsByCodesResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | When an endpoint receives a request with an invalid or unauthorized JWT token, a 401 error (Unauthorized) is thrown. This error indicates that the client is not authenticated or lacks the necessary permissions to access the requested resource. The server responds with the 401 error to enforce security measures and restrict unauthorized access. Clients should handle this error by taking appropriate actions, such as re-authenticating or obtaining a valid token, to gain authorized access. |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAssetsByIds**
> DamListAssetsByIdsResponse listAssetsByIds(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiListAssetsByIdsRequest = {
  // DamListAssetsByIdsRequest
  body: {
    tenantId: "tenantId_example",
    ids: [
      "ids_example",
    ],
  },
};

apiInstance.listAssetsByIds(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **DamListAssetsByIdsRequest**|  |


### Return type

**DamListAssetsByIdsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | When an endpoint receives a request with an invalid or unauthorized JWT token, a 401 error (Unauthorized) is thrown. This error indicates that the client is not authenticated or lacks the necessary permissions to access the requested resource. The server responds with the 401 error to enforce security measures and restrict unauthorized access. Clients should handle this error by taking appropriate actions, such as re-authenticating or obtaining a valid token, to gain authorized access. |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAssetsByIds_0**
> DamListAssetsByIdsResponse listAssetsByIds_0(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiListAssetsByIds0Request = {
  // DamListAssetsByIdsRequest
  body: {
    tenantId: "tenantId_example",
    ids: [
      "ids_example",
    ],
  },
};

apiInstance.listAssetsByIds_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **DamListAssetsByIdsRequest**|  |


### Return type

**DamListAssetsByIdsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | When an endpoint receives a request with an invalid or unauthorized JWT token, a 401 error (Unauthorized) is thrown. This error indicates that the client is not authenticated or lacks the necessary permissions to access the requested resource. The server responds with the 401 error to enforce security measures and restrict unauthorized access. Clients should handle this error by taking appropriate actions, such as re-authenticating or obtaining a valid token, to gain authorized access. |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAssets_0**
> DamListAssetsResponse listAssets_0(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiListAssets0Request = {
  // DamListAssetsRequest
  body: {
    tenantId: "tenantId_example",
    pageSize: 1,
    pageToken: "pageToken_example",
  },
};

apiInstance.listAssets_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **DamListAssetsRequest**|  |


### Return type

**DamListAssetsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | When an endpoint receives a request with an invalid or unauthorized JWT token, a 401 error (Unauthorized) is thrown. This error indicates that the client is not authenticated or lacks the necessary permissions to access the requested resource. The server responds with the 401 error to enforce security measures and restrict unauthorized access. Clients should handle this error by taking appropriate actions, such as re-authenticating or obtaining a valid token, to gain authorized access. |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAsset**
> DamAsset updateAsset(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiUpdateAssetRequest = {
  // DamUpdateAssetRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    payload: {
      code: "code_example",
      origin: {
        url: "url_example",
        type: "EXTERNAL",
      },
      metadata: [
        {
          key: "key_example",
          value: "value_example",
        },
      ],
    },
    payloadMask: "payloadMask_example",
  },
};

apiInstance.updateAsset(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **DamUpdateAssetRequest**|  |


### Return type

**DamAsset**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | When an endpoint receives a request with an invalid or unauthorized JWT token, a 401 error (Unauthorized) is thrown. This error indicates that the client is not authenticated or lacks the necessary permissions to access the requested resource. The server responds with the 401 error to enforce security measures and restrict unauthorized access. Clients should handle this error by taking appropriate actions, such as re-authenticating or obtaining a valid token, to gain authorized access. |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAsset_0**
> DamAsset updateAsset_0(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiUpdateAsset0Request = {
  // DamUpdateAssetRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    payload: {
      code: "code_example",
      origin: {
        url: "url_example",
        type: "EXTERNAL",
      },
      metadata: [
        {
          key: "key_example",
          value: "value_example",
        },
      ],
    },
    payloadMask: "payloadMask_example",
  },
};

apiInstance.updateAsset_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **DamUpdateAssetRequest**|  |


### Return type

**DamAsset**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | When an endpoint receives a request with an invalid or unauthorized JWT token, a 401 error (Unauthorized) is thrown. This error indicates that the client is not authenticated or lacks the necessary permissions to access the requested resource. The server responds with the 401 error to enforce security measures and restrict unauthorized access. Clients should handle this error by taking appropriate actions, such as re-authenticating or obtaining a valid token, to gain authorized access. |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


