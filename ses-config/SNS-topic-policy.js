{
  "Version": "2008-10-17",
  "Id": "__default_policy_ID",
  "Statement": [
    {
      "Sid": "__default_statement_ID",
      "Effect": "Allow",
      "Principal": {
        "AWS": "*"
      },
      "Action": [
        "SNS:GetTopicAttributes",
        "SNS:SetTopicAttributes",
        "SNS:AddPermission",
        "SNS:RemovePermission",
        "SNS:DeleteTopic",
        "SNS:Subscribe",
        "SNS:ListSubscriptionsByTopic",
        "SNS:Publish"
      ],
      "Resource": "arn:aws:sns:us-east-1:379756405377:eio-LandingPage-Quotation-SES",
      "Condition": {
        "StringEquals": {
          "AWS:SourceOwner": "379756405377"
        }
      }
    }
  ]
}

`"name": ${name}, "phone": ${phone}, "email": ${email}, "territory": ${territory}, "service": ${service}, "shift": ${shift}, "duration": ${duration}, "unitPrice": ${unitPrice}, "totalPrice": ${totalPrice}`