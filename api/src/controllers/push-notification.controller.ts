// import { post, getJsonSchemaRef, requestBody, HttpErrors } from "@loopback/rest";

// import { RechargeWallet } from "../models";

// import { authenticate, AuthenticationBindings } from "@loopback/authentication";

// import { PermissionKeys } from "../authorization/permission-keys";

// import { pushNotificationSchemaRequestBody } from "./specs/user.controller.spec";

// // import { SendMessage } from "../services/sns.service";

// // Uncomment these imports to begin using these cool features!

// // import {inject} from '@loopback/context';


// export class PushNotificationController {
//   constructor() { }

//   // @post('/pushNotification', {
//   //   responses: {
//   //     '200': {
//   //       description: 'couponCode code',
//   //       content: {
//   //         'application/json': {
//   //           schema: getJsonSchemaRef(RechargeWallet),
//   //         },
//   //       },
//   //     },
//   //   },
//   // })
//   // @authenticate('jwt', { required: [PermissionKeys.SuperAdmin, PermissionKeys.AccessAuthFeatures] })
//   // async couponValidation(@requestBody(pushNotificationSchemaRequestBody)
//   // pushData: RechargeWallet,
//   // ): Promise<any> {
//   //   SendMessage(RechargeWallet)
//   //   return Promise.resolve({ code: 200, message: pushData.message });
//   // }
// }
