export const CredentialsSchema = {
  type: 'object',
  required: ['email', 'password'],
  properties: {
    email: {
      type: 'string',
      format: 'email',
    },
    password: {
      type: 'string',
      minlenght: 8,
    },
  },
};

export const CredentialsRequestBody = {
  description: 'The Input of login function',
  required: true,
  content: {
    'application/json': { schema: CredentialsSchema }
  }
}

export const forgotpasswordCredentialsSchema = {
  type: 'object',
  required: ['email'],
  properties: {
    email: {
      type: 'string',
      format: 'email',
    },
  },
};

export const forgotpasswordCredentialsRequestBody = {
  description: 'The Input of forgot password function',
  required: true,
  content: {
    'application/json': { schema: forgotpasswordCredentialsSchema }
  }
}



export const MobileCredentialsSchema = {
  type: 'object',
  required: ['mobile'],
  properties: {
    mobile: {
      type: 'string',
      minlenght: 10,
      maxlenght: 10
    },
  },
};

export const MobileCredentialsRequestBody = {
  description: 'The Input of mobile login function',
  required: true,
  content: {
    'application/json': { schema: MobileCredentialsSchema }
  }
}


export const MobileLoginCredentialsSchema = {
  type: 'object',
  required: ['mobile'],
  properties: {
    mobile: {
      type: 'string',
      minlenght: 10,
    },
    otp: {
      type: 'number',
      minlenght: 4,
    },
  },
};

export const MobileLoginCredentialsRequestBody = {
  description: 'The Input of mobile login function',
  required: true,
  content: {
    'application/json': { schema: MobileLoginCredentialsSchema }
  }
}


export const ResendMobileLoginCredentialsSchema = {
  type: 'object',
  required: ['mobile'],
  properties: {
    mobile: {
      type: 'string',
      minlenght: 10,
    },
  },
};

export const ResendMobileLoginCredentialsRequestBody = {
  description: 'The Input of mobile login function',
  required: true,
  content: {
    'application/json': { schema: ResendMobileLoginCredentialsSchema }
  }
}


export const GetOrderCredentialsSchema = {
  type: 'object',
  required: ['mobile'],
  properties: {
    mobile: {
      type: 'string',
      minlenght: 10,
    },
  },
};

export const GetOrderCredentialsSchemaRequestBody = {
  description: 'The Input of mobile login function',
  required: true,
  content: {
    'application/json': { schema: ResendMobileLoginCredentialsSchema }
  }
}


export const RechargeCouponSchema = {
  type: 'object',
  required: ['couponCode'],
  properties: {
    couponCode: {
      type: 'string'
    },
  },
};

export const RechargeCouponSchemaRequestBody = {
  description: 'The Input of Recharge Coupon',
  required: true,
  content: {
    'application/json': { schema: RechargeCouponSchema }
  }
}

export const InstaCouponSchema = {
  type: 'object',
  required: ['coupon', 'franchiseId'],
  properties: {
    coupon: {
      type: 'string'
    },
    franchiseId: {
      type: 'number'
    },
  },
};

export const InstaCouponSchemaRequestBody = {
  description: 'The Input of Promo Coupon',
  required: true,
  content: {
    'application/json': { schema: InstaCouponSchema }
  }
}


export const pushNotificationSchema = {
  type: 'object',
  required: ['token', 'message'],
  properties: {
    token: {
      type: 'string'
    },
    message: {
      type: 'string'
    },
  },

};

export const pushNotificationSchemaRequestBody = {
  description: 'send Push Notification',
  required: true,
  content: {
    'application/json': { schema: pushNotificationSchema }
  }
}



export const communicationSMSSchema = {
  type: 'object',
  required: ['body'],
  properties: {
    body: {
      type: 'string',
    },
    status: {
      type: 'boolean',
    },
  },
};

export const communicationSMSRequestBody = {
  description: 'Send SMS',
  required: true,
  content: {
    'application/json': { schema: communicationSMSSchema }
  }
}

export const communicationPushSchema = {
  type: 'object',
  required: ['head', 'body'],
  properties: {
    head: {
      type: 'string',
    },
    pushbody: {
      type: 'string',
    },
    status: {
      type: 'boolean',
    },
  },
};

export const communicationPushRequestBody = {
  description: 'Send Push',
  required: true,
  content: {
    'application/json': { schema: communicationPushSchema }
  }
}

export const PushAllSchema = {
  type: 'object',
  required: ['body', 'head'],
  properties: {
    pushbody: {
      type: 'string',
    },
    head: {
      type: 'string',
    },
  },
};

export const PushALLRequestBody = {
  description: 'Send Push',
  required: true,
  content: {
    'application/json': { schema: PushAllSchema }
  }
}

export const communicationEmailSchema = {
  type: 'object',
  required: ['emailSubject', 'emailBody'],
  properties: {
    emailSubject: {
      type: 'string',
    },
    emailBody: {
      type: 'string',
    },
    status: {
      type: 'boolean',
    },
  },
};

export const communicationEmailRequestBody = {
  description: 'Send Emails',
  required: true,
  content: {
    'application/json': { schema: communicationEmailSchema }
  }
}


export const invoiceEmailSchema = {
  type: 'object',
  required: ['orderId'],
  properties: {
    orderId: {
      type: 'number',
    },
  },
};

export const invoiceEmailRequestBody = {
  description: 'Send Invoices',
  required: true,
  content: {
    'application/json': { schema: invoiceEmailSchema }
  }
}

export const userOfferSchema = {
  type: 'object',
  required: ['id'],
  properties: {
    id: {
      type: 'number',
    },
  },
};

export const userOfferRequestBody = {
  description: 'Get User Offers',
  required: true,
  content: {
    'application/json': { schema: userOfferSchema }
  }
}


export const DashboardDetailsSchema = {
  type: 'object',
  properties: {
    sDate: {
      "type": 'string',
    },
    EDate: {
      "type": 'string',
    },
    franchise: {
      type: 'string',
    },
  },
};

export const DashboardDetailsRequestBody = {
  description: 'The Input of DashBoard',
  required: true,
  content: {
    'application/json': { schema: DashboardDetailsSchema }
  }
}

