enum InputType {
  HIDDEN,
  TEXT,
  SELECT,
  EMAIL,
  PHONE,
}

const BandSchema = [
  {
    name: 'S/N',
    key: '_id',
    description: 'Enter name of band',
    selector: (row) => row._id && row._id.substring(0, 7),
    sortable: true,
    required: true,
    inputType: InputType.HIDDEN,
  },
  {
    name: 'Name of Band',
    key: 'name',
    description: 'Enter name of band',
    selector: (row) => row.name,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },
  {
    name: 'Band Type',
    key: 'bandType',
    description: 'Enter name of band',
    selector: (row) => row.bandType,
    sortable: true,
    required: true,
    inputType: InputType.SELECT,
  },
  {
    name: 'Description of Band',
    key: 'description',
    description: 'Enter description of band',
    selector: (row) => row.description,
    sortable: true,
    required: false,
    inputType: InputType.TEXT,
  },
];

const RevenueSchema=[
  {
    name: 'S/N',
    key: '_id',
    description: 'Enter name of Revenue',
    selector: (row) => row._id && row._id.substring(0, 7),
    sortable: true,
    required: true,
    inputType: InputType.HIDDEN,
  },
  {
    name: 'Date',
    key: 'createdAt',
    description: 'Enter date',
    selector: (row) => row.createdAt  && row.createdAt.substring(0, 10),
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },
  {
    name: 'Description',
    key: 'description',
    description: 'Enter name of description',
    selector: (row) => row.description,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },
  {
    name: 'Client',
    key: 'fromName',
    description: 'Enter Client',
    selector: (row) => row.fromName,
    sortable: true,
    required: false,
    inputType: InputType.TEXT,
  },
  {
    name: 'Amount',
    key: 'amount',
    description: 'Enter Amount',
    selector: (row) => row.amount,
    sortable: true,
    required: false,
    inputType: InputType.TEXT,
  },
  {
    name: 'Mode',
    key: 'paymentmode',
    description: 'Enter Mode',
    selector: (row) => row.paymentmode,
    sortable: true,
    required: false,
    inputType: InputType.TEXT,
  },
]

const CollectionSchema =[
  {
    name: 'S/N',
    key: '_id',
    description: 'Enter name of Revenue',
    selector: (row) => row._id && row._id.substring(0, 7),
    sortable: true,
    required: true,
    inputType: InputType.HIDDEN,
  },
  {
    name: 'Name',
    key: 'fromName',
    description: 'Enter Client',
    selector: (row) => row.fromName,
    sortable: true,
    required: false,
    inputType: InputType.TEXT,
  },
  {
    name: 'Client',
    key: 'toName',
    description: 'Enter name of description',
    selector: (row) => row.toName,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },
 
  {
    name: 'Amount',
    key: 'amount',
    description: 'Enter Amount',
    selector: (row) => row.amount,
    sortable: true,
    required: false,
    inputType: InputType.TEXT,
  },
  {
    name: 'Mode',
    key: 'paymentmode',
    description: 'Enter Mode',
    selector: (row) => row.paymentmode,
    sortable: true,
    required: false,
    inputType: InputType.TEXT,
  },
]
const EmployeeSchema = [
  {
    name: 'S/N',
    key: '_id',
    description: 'Enter name of employee',
    selector: (row) => row._id && row._id.substring(0, 7),
    sortable: true,
    required: true,
    inputType: InputType.HIDDEN,
  },
  {
    name: 'Firstname',
    key: 'firstname',
    description: 'Enter firstname',
    selector: (row) => row.firstname,

    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },
  {
      name: 'Last Name',
    key: 'lastname',
    description: 'Enter lastname',
    selector: (row) => row.lastname,

    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },
  {
     name: 'Profession',
    key: 'profession',
    description: 'Enter profession',
    selector: (row) => row.profession,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },
  {
    name: 'Phone number',
    key: 'phone',
    description: 'Enter phone number',
    selector: (row) => row.phone,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },
  {
    name: 'Email',
    key: 'email',
    description: 'Enter Email',
    selector: (row) => row.email,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },
  {
    name: 'Department',
    key: 'department',
    description: 'Enter department',
    selector: (row) => row.department,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },
  {
    name: 'Department Unit',
    key: 'deptunit',
    description: 'Enter department',
    selector: (row) => row.deptunit,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },
];

const LocationSchema = [
  {
    name: 'S/N',
    key: '_id',
    description: 'Enter name of location',
    selector: (row) => row._id && row._id.substring(0, 7),
    sortable: true,
    required: true,
    inputType: InputType.HIDDEN,
  },
  {
    name: 'Name of Location',
    key: 'name',
    description: 'Enter name of Location',
    selector: (row) => row.name,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },
  {
    name: 'Location Type',
    key: 'locationType',
    description: 'Enter name of Location',
    selector: (row) => row.locationType,
    sortable: true,
    required: true,
    inputType: InputType.SELECT,
  },
]


const OrganisationSchema = [
 {
   name: 'S/N',
   key: '_id',
   description: 'ID',
   selector: (row) => row._id && row._id.substring(0, 7),
   sortable: true,
   required: true,
   inputType: InputType.HIDDEN,
 }, 
 {
  name: 'Name',
  key: 'facilityName',
  description: 'Name of Organization',
  selector: (row) => row.facilityName,
  sortable: true,
  required: true,
  inputType: InputType.TEXT,
}, 
{
 name: 'CAC Number',
 key: 'facilityRCNumber',
 description: 'CAC Number',
 selector: (row) => row.facilityName,
 sortable: true,
 required: true,
 inputType: InputType.TEXT,
}, 
{
 name: 'Country',
 key: 'facilityCountry',
 description: 'Facility Country',
 selector: (row) => row.facilityCountry,
 sortable: true,
 required: true,
 options: ['Nigeria'],
 inputType: InputType.SELECT,
},
{
 name: 'State',
 key: 'facilityState',
 description: 'Organization State',
 selector: (row) => row.facilityState,
 sortable: true,
 required: true,
 options: ['Lagos'],
 inputType: InputType.SELECT,
},
{
 name: 'LGA',
 key: 'facilityLGA',
 description: 'LGA',
 selector: (row) => row.facilityLGA,
 sortable: true,
 required: true,
 options: ['Lagos'],
 inputType: InputType.SELECT,
},

{
 name: 'City',
 key: 'facilityCity',
 description: 'Organization City',
 selector: (row) => row.facilityCity,
 sortable: true,
 required: true,
 options: ['Lagos'],
 inputType: InputType.SELECT,
},

{
 name: 'Address',
 key: 'facilityAddress',
 description: 'Organization Registered Address',
 selector: (row) => row.facilityAddress,
 sortable: true,
 required: true,
 inputType: InputType.TEXT,
},

{
 name: 'Phone  Number',
 key: 'facilityContactPhone',
 description: 'Organization Contact Phone Number',
 selector: (row) => row.facilityContactPhone,
 sortable: true,
 required: true,
 inputType: InputType.PHONE,
},

{
 name: 'Email',
 key: 'facilityEmail',
 description: 'Organization Email',
 selector: (row) => row.facilityContactPhone,
 sortable: true,
 required: true,
 inputType: InputType.EMAIL,
},
{
 name: 'CEO',
 key: 'facilityOwner',
 description: 'Organization CEO',
 selector: (row) => row.facilityOwner,
 sortable: true,
 required: true,
 inputType: InputType.TEXT,
},

{
 name: 'Org Type',
 key: 'facilityType',
 description: 'Organization Type',
 selector: (row) => row.facilityType,
 sortable: true,
 required: true,
 inputType: InputType.TEXT,
},
{
 name: 'Org Category',
 key: 'facilityCategory',
 description: 'Organization Category',
 selector: (row) => row.facilityCategory,
 sortable: true,
 required: true,
 inputType: InputType.TEXT,
}];


export { BandSchema, OrganisationSchema, RevenueSchema, CollectionSchema,EmployeeSchema,LocationSchema, InputType };
