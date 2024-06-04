/**
 * Dam Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AssetMetadata } from '../models/AssetMetadata';
import { DamAssetOrigin } from '../models/DamAssetOrigin';
import { DamAssetType } from '../models/DamAssetType';
import { HttpFile } from '../http/http';

export class DamCreateAssetRequest {
    'tenantId': string;
    'type': DamAssetType;
    'code': string;
    'metadata'?: Array<AssetMetadata>;
    'origin': DamAssetOrigin;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "DamAssetType",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "Array<AssetMetadata>",
            "format": ""
        },
        {
            "name": "origin",
            "baseName": "origin",
            "type": "DamAssetOrigin",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DamCreateAssetRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



