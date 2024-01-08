import { PermissionKeys } from "./authorization/permission-keys";
import { Request } from '@loopback/rest';
import { UserProfile } from '@loopback/security';
import { RequestHandler } from 'express-serve-static-core';

export interface RequiredPermissions {
    required: PermissionKeys[]
}

export interface MyUserProfile {
    id: string;
    email?: string;
    name: string;
    permissions: PermissionKeys[]
}

export type FileUploadHandler = RequestHandler;
