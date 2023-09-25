# ApiGeneratedChatGpt35.ArticleApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiArticlesGet**](ArticleApi.md#apiArticlesGet) | **GET** /api/articles | 
[**apiArticlesIdDelete**](ArticleApi.md#apiArticlesIdDelete) | **DELETE** /api/articles/{id} | 
[**apiArticlesIdGet**](ArticleApi.md#apiArticlesIdGet) | **GET** /api/articles/{id} | 
[**apiArticlesIdPut**](ArticleApi.md#apiArticlesIdPut) | **PUT** /api/articles/{id} | 
[**apiArticlesPost**](ArticleApi.md#apiArticlesPost) | **POST** /api/articles | 



## apiArticlesGet

> [ArticleDto] apiArticlesGet()



### Example

```javascript
import ApiGeneratedChatGpt35 from 'api_generated_chat_gpt35';

let apiInstance = new ApiGeneratedChatGpt35.ArticleApi();
apiInstance.apiArticlesGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ArticleDto]**](ArticleDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiArticlesIdDelete

> apiArticlesIdDelete(id)



### Example

```javascript
import ApiGeneratedChatGpt35 from 'api_generated_chat_gpt35';

let apiInstance = new ApiGeneratedChatGpt35.ArticleApi();
let id = 56; // Number | 
apiInstance.apiArticlesIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiArticlesIdGet

> ArticleDto apiArticlesIdGet(id)



### Example

```javascript
import ApiGeneratedChatGpt35 from 'api_generated_chat_gpt35';

let apiInstance = new ApiGeneratedChatGpt35.ArticleApi();
let id = 56; // Number | 
apiInstance.apiArticlesIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**ArticleDto**](ArticleDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiArticlesIdPut

> apiArticlesIdPut(id, opts)



### Example

```javascript
import ApiGeneratedChatGpt35 from 'api_generated_chat_gpt35';

let apiInstance = new ApiGeneratedChatGpt35.ArticleApi();
let id = 56; // Number | 
let opts = {
  'articleUpdateDto': new ApiGeneratedChatGpt35.ArticleUpdateDto() // ArticleUpdateDto | 
};
apiInstance.apiArticlesIdPut(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **articleUpdateDto** | [**ArticleUpdateDto**](ArticleUpdateDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## apiArticlesPost

> apiArticlesPost(opts)



### Example

```javascript
import ApiGeneratedChatGpt35 from 'api_generated_chat_gpt35';

let apiInstance = new ApiGeneratedChatGpt35.ArticleApi();
let opts = {
  'articleCreateDto': new ApiGeneratedChatGpt35.ArticleCreateDto() // ArticleCreateDto | 
};
apiInstance.apiArticlesPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleCreateDto** | [**ArticleCreateDto**](ArticleCreateDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined

