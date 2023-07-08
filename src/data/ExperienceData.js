export const experiences = [
    {
        id : 1,
        companyName : "Capri global",
        from : "2022-12-09",
        to : "Present",
        role : "Software Engineer",
        techStack : "Full stack (Java Spring Boot/Micronaut + React Js + AWS)",
        location : "Gurugram",
        projects : [
            {
                id : 1.1,
                name : "AutoPay/AutoDebit",
                description : "A system which is responsible to create mandate/subscription of user based on Loan disburse to customer and auto deduct EMIs on predifned date with predefined amount with a flexubulity of ONDEMAND collections."
            }
        ]
    },
    {
        id : 2,
        companyName : "Aakash + Byju's Technology Innovation Lab",
        from : "2021-12-01",
        to : "2022-12-08",
        role : "Senior Software Engineer",
        techStack : "Full stack (Java Spring Boot/Micronaut + AWS + MuleSoft)",
        location : "Gurugram",
        projects : [
            {
                id : 2.1,
                name : "Date Sync System",
                description : "This system migrates real time data from PHOENIX (new system) to ERP (legacy system) with great amount of fault tolrance and zero data loss in case of failure. Also notification system is well integrated to notify about the failure to the respective parties."
            },
            {
                id : 2.2,
                name : "Secuirty Group System",
                description : "This system can be relate with access control systems. Here users are assigned with a security group on the basis of their role and thus data enabled for that secuorty gorup is only visible to the users."
            },
            {
                id : 2.3,
                name : "OTP Service",
                description : "This is centerlised service responsible for user authentication using OTP."
            },
            {
                id : 2.4,
                name : "Temp Role Assigment Feature",
                description : "This feature helps consumers/users to have some other role temprorily along with their roles for some delegation days. After delegation days expiration user will asssign with their actual role."
            }
        ]
    },
    {
        id : 3,
        companyName : "Encore Advantage (Midland Credit Management)",
        from : "2020-02-05",
        to : "2021-11-31",
        role : "Software Engineer",
        techStack : "MuleSoft + Spring boot + AWS",
        location : "Gurugram",
        projects : [
            {
                id : 3.1,
                name : "Communication Management Sub System (CMMS)",
                description : "This system is responsible for sending communication to the customers. It was omini-channel system which identify type of communication and prepare a pdf to be sent to the user using SmarComm integartions."
            },
            {
                id : 3.2,
                name : "JSON Schema Validator Service",
                description : "This is SpringBoot based microservice which take JSON as input and schema version against which it needs to be verified. It fetch the schema from S3 (do caching ) on run and verify the json and returns the result."
            }
        ]
    }
]