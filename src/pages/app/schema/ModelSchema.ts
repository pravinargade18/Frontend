import * as yup from 'yup';

import { InputType, Schema } from './util';

const BandSchema = [
  {
    name: 'S/N',
    key: '_id',
    description: 'Enter name of band',
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
    inputType: InputType.SELECT_LIST,
    options: ['Provider', 'Company', 'Patient', 'Plan'],
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

const RevenueSchema = [
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
    selector: (row) => row.createdAt && row.createdAt.substring(0, 10),
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
];

const CollectionSchema = [
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
];
const EmployeeSchema = [
  {
    name: 'S/N',
    key: 'sn',
    description: 'Enter name of employee',
    selector: (row) => row.sn,
    sortable: true,
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
    validator: yup.string().required('Enter your Firstname'),
  },
  {
    name: 'Last Name',
    key: 'lastname',
    description: 'Enter lastname',
    selector: (row) => row.lastname,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
    validator: yup.string().required('Enter your Lastname'),
  },
  {
    name: 'Profession',
    key: 'profession',
    description: 'Enter profession',
    selector: (row) => row.profession,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
    validator: yup.string().required('Enter your Profession'),
  },
  {
    name: 'Phone number',
    key: 'phone',
    description: 'Enter phone number',
    selector: (row) => row.phone,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
    validator: yup.string().required('Enter your Phone number'),
  },
  {
    name: 'Email',
    key: 'email',
    description: 'Enter Email',
    selector: (row) => row.email,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
    validator: yup.string().required('Enter your valid Email'),
  },
  {
    name: 'Department',
    key: 'department',
    description: 'Enter department',
    selector: (row) => row.department,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
    validator: yup.string().required('Enter your Department'),
  },
  {
    name: 'Department Unit',
    key: 'deptunit',
    description: 'Enter department',
    selector: (row) => row.deptunit,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
    validator: yup.string().required('Enter your Departmental Unit'),
  },
];

const LocationSchema = [
  {
    name: 'S/N',
    key: '_id',
    description: 'Enter name of location',
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
    inputType: InputType.SELECT_LIST,
    options: ['Front Desk', 'Clinic', 'Store', 'Laboratory', 'Finance'],
  },
];

const OrganisationSchema: Schema[] = [
  {
    name: 'S/N',
    key: '_id',
    description: 'ID',
    sortable: true,
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
    validator: yup.string().min(5, 'Enter a valid Organnisation name'),
  },
  {
    name: 'CAC Number',
    key: 'facilityCACNumber',
    description: 'CAC Number',
    selector: (row) => row.facilityName,
    sortable: true,
    required: true,
    inputType: InputType.NUMBER,
    validator: yup.number().min(5, 'Enter a valid CAC number'),
  },
  {
    name: 'Country',
    key: 'facilityCountry',
    description: 'Facility Country',
    selector: (row) => row.facilityCountry,
    sortable: true,
    required: true,
    options: ['Nigeria'],
    inputType: InputType.SELECT_LIST,
  },
  {
    name: 'State',
    key: 'facilityState',
    description: 'Organization State',
    selector: (row) => row.facilityState,
    sortable: true,
    required: true,
    options: ['Lagos'],
    inputType: InputType.SELECT_LIST,
  },
  {
    name: 'LGA',
    key: 'facilityLGA',
    description: 'LGA',
    selector: (row) => row.facilityLGA,
    sortable: true,
    required: true,
    options: ['Lagos'],
    inputType: InputType.SELECT_LIST,
  },

  {
    name: 'City',
    key: 'facilityCity',
    description: 'Organization City',
    selector: (row) => row.facilityCity,
    sortable: true,
    required: true,
    options: ['Lagos'],
    inputType: InputType.SELECT_LIST,
  },

  {
    name: 'Address',
    key: 'facilityAddress',
    description: 'Organization Registered Address',
    selector: (row) => row.facilityAddress,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
    validator: yup.string().min(10, 'Enter a valid Address'),
  },

  {
    name: 'Phone  Number',
    key: 'facilityContactPhone',
    description: 'Organization Contact Phone Number',
    selector: (row) => row.facilityContactPhone,
    sortable: true,
    required: true,
    inputType: InputType.PHONE,
    validator: yup.string().min(10, 'Enter a  Phone number').max(13, 'Enter a Phone number'),
  },

  {
    name: 'Email',
    key: 'facilityEmail',
    description: 'Organization Email',
    selector: (row) => row.facilityContactPhone,
    sortable: true,
    required: true,
    inputType: InputType.EMAIL,
    validator: yup.string().email(),
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
    inputType: InputType.SELECT_LIST,
    options: ['Hospital', 'Laboratory'],
  },
  {
    name: 'Org Category',
    key: 'facilityCategory',
    description: 'Organization Category',
    selector: (row) => row.facilityCategory,
    sortable: true,
    required: true,
    inputType: InputType.SELECT_LIST,
    options: ['Health', 'Finance'],
  },
];

const ModulesSchema = [
  {
    name: 'Module 1',
    key: 'modules',
    description: 'Modules',
    selector: (row) => row._id && row._id.substring(0, 7),
    sortable: true,
    required: true,
    options: [
      { label: 'Accounting', value: 'moduleAccounting' },
      { label: 'Admin', value: 'moduleAdmin' },
      { label: 'Blood Bank', value: 'moduleBlood Bank' },
      { label: 'Client', value: 'moduleClient' },
      { label: 'Clinic', value: 'moduleClinic' },
      { label: 'Communication', value: 'moduleCommunication' },
      {
        label: 'Continous Mediscal Education',
        value: 'moduleContinous Mediscal Education',
      },
      { label: 'Documentation', value: 'moduleDocumentation' },
      { label: 'Epidemiology', value: 'moduleEpidemiology' },
      { label: 'Finance', value: 'moduleFinance' },
      { label: 'Immunization', value: 'moduleImmunization' },
    ],
    inputType: InputType.SELECT_CHECKBOX,
  },
  {
    name: 'Module 2',
    key: 'modules',
    description: 'Modules',
    selector: (row) => row._id && row._id.substring(0, 7),
    sortable: true,
    required: true,
    options: [
      { label: 'Inventory', value: 'moduleInventory' },
      { label: 'Laboratory', value: 'moduleLaboratory' },
      { label: 'Managed Care', value: 'moduleManaged Care' },
      { label: 'Patient Portal', value: 'modulePatient Portal' },
      { label: 'Pharmacy', value: 'modulePharmacy' },
      { label: 'Radiology', value: 'moduleRadiology' },
      { label: 'Report', value: 'moduleReport' },
      {
        label: 'Research and Data Exhange',
        value: 'moduleResearch and Data Exhange',
      },
      { label: 'Telemedicine', value: 'moduleTelemedicine' },
      { label: 'Theatre', value: 'moduleTheatre' },
      { label: 'User Profile', value: 'moduleUser Profile' },
    ],
    inputType: InputType.SELECT_CHECKBOX,
  },
];

const OnboardingEmployeeSchema = [
  {
    name: 'Firstname',
    key: 'firstname',
    description: 'Firstname',
    inputType: InputType.TEXT,
    required: true,
  },
  {
    name: 'Lastname',
    key: 'lastname',
    description: 'Lastname',
    inputType: InputType.TEXT,
    required: true,
  },
  {
    name: 'Organization Email',
    key: 'email',
    description: 'Organnisation  Email',
    inputType: InputType.TEXT,
    required: true,
  },
  {
    name: 'Personal email',
    key: 'personalEmail',
    description: 'Personal email',
    inputType: InputType.TEXT,
    required: true,
  },
  {
    name: 'Phone number',
    key: 'phone',
    description: 'Enter phone number',
    inputType: InputType.TEXT,
    required: true,
  },

  {
    name: 'Country',
    key: 'facilityCountry',
    description: 'Facility Country',
    options: ['Nigeria'],
    inputType: InputType.SELECT_LIST,
    required: true,
  },
  {
    name: 'State',
    key: 'facilityState',
    description: 'Organization State',
    options: ['Lagos'],
    inputType: InputType.SELECT_LIST,
    required: true,
  },
  {
    name: 'Department',
    key: 'department',
    description: 'Enter department',
    options: ['Front Desk', 'Accounting', 'Clinic', 'Pharmacy'],
    inputType: InputType.SELECT_LIST,
    required: true,
  },
  {
    name: 'Department Unit',
    key: 'deptunit',
    description: 'Enter department',
    options: ['Unit 1', 'Unnit 1', 'Unit 1', 'unit 2'],
    inputType: InputType.SELECT_LIST,
    required: true,
  },
];
// const BillServiceSchema = [
//   {
//     name: 'S/N',
//     key: '_id',
//     selector: (row) => row._id && row._id.substring(0, 7),
//     sortable: true,
//     required: true,
//     inputType: InputType.HIDDEN,
//   },
//   {
//     name: 'Name',
//     key: 'name',
//     description: 'Enter name of band',
//     selector: (row) => row.orderInfo.orderObj.clientname,
//     sortable: true,
//     required: true,
//     inputType: InputType.TEXT,
//   },
//   {
//     name: 'Date',
//     key: 'date',
//     description: 'Enter date',
//     selector: (row) => row.createdAt && row.createdAt.substring(0, 10),
//     sortable: true,
//     required: true,
//     inputType: InputType.DATE,
//   },
//   {
//     name: 'Description of Band',
//     key: 'description',
//     description: 'Enter description of band',
//     selector: (row) => row.orderInfo.orderObj.order,
//     sortable: true,
//     required: false,
//     inputType: InputType.TEXT,
//   },
//   {
//     name: 'Status',
//     key: 'billing_status',
//     description: 'Enter status',
//     selector: (row) => row.billing_status,
//     sortable: true,
//     required: false,
//     inputType: InputType.TEXT,
//   },
//   {
//     name: 'Amount',
//     key: 'amount',
//     description: 'Enter amount',
//     selector: (row) => row.serviceInfo.amount,
//     sortable: true,
//     required: false,
//     inputType: InputType.TEXT,
//   },
// ];
// const BillServiceCreateSchema = [
//   {
//     name: 'ID',
//     key: '_id',
//     selector: (row) => row._id && row._id.substring(0, 7),
//     description: 'ID',
//     sortable: true,
//     required: true,
//     inputType: InputType.HIDDEN,
//   },
//   {
//     name: 'Client',
//     key: 'clientId',
//     description: 'Search for  Client',
//     selector: (row) => `${row.firstname} ${row.lastname}`,
//     sortable: true,
//     required: true,
//     inputType: InputType.SELECT_AUTO_SUGGEST,
//     options: {
//       model: Models.EMPLOYEE,
//       or: ['firstname', 'lastname', 'middlename', 'phone', 'clientTags', 'mrn', 'specificDetails'],
//       labelSelector: (obj) =>
//         `${obj.firstname} ${obj.lastname} ${toDurationString(obj.dob)} ${obj.gender} ${obj.profession} ${obj.phone} ${
//           obj.email
//         }`,
//       valueSelector: (obj) => obj._id,
//       extraFields: {
//         firstname: 'firstname',
//         lastname: 'lastname',
//         dob: 'dob',
//         gender: 'gender',
//         phone: 'phone',
//         email: 'email',
//       },
//     },
//   },
//   {
//     name: 'Billing Mode',
//     description: 'Billing Mode',
//     key: 'billing_mode',
//     selector: (row) => row.appointment_type,
//     sortable: true,
//     required: true,
//     inputType: InputType.SELECT_LIST,
//     options: ['Cash', 'Family', 'Hmo'],
//   },

//   [
//     {
//       name: 'Date and Time',
//       key: 'start_time',
//       description: 'Time and Date',
//       selector: (row) => row.start_time,
//       sortable: true,
//       required: true,
//       inputType: InputType.DATETIME,
//     },
//   ],
//   {
//     name: 'Name of Location',
//     key: 'name',
//     description: 'Invoice',
//     selector: (row) => row.name,
//     sortable: true,
//     required: true,
//     inputType: InputType.TEXT,
//     options: [],
//   },
//   {
//     name: 'Name of Location',
//     key: 'services',
//     description: 'Services',
//     selector: (row) => row.service,
//     sortable: true,
//     required: true,
//     inputType: InputType.TEXT,
//   },
// ];
const PaymentDetailsSchema = [
  {
    name: 'S/N',
    key: '_id',
    description: '',
    selector: (row) => row._id && row._id.substring(0, 7),
    sortable: true,
    required: true,
    inputType: InputType.HIDDEN,
  },
  {
    name: 'payment Options',
    key: 'paymentmode',
    description: 'Enter payment Option',
    selector: (row) => row.paymentmode,
    sortable: true,
    required: true,
    inputType: InputType.SELECT_LIST,
    options: ['Cash', 'Wallet', 'Bank Transfer', 'Card', 'Cheque'],
  },
  {
    name: 'Amount',
    key: 'amount',
    description: 'Enter Amount',
    selector: (row) => row.amount,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },

  {
    name: 'Description',
    key: 'description',
    description: 'Enter description',
    selector: (row) => row.description,
    sortable: true,
    required: false,
    inputType: InputType.TEXT,
  },
];

const PaymentSchema = [
  {
    name: 'S/N',
    key: '_id',
    selector: (row) => row._id && row._id.substring(0, 7),
    sortable: true,
    required: true,
    inputType: InputType.HIDDEN,
  },
  {
    name: 'Name',
    key: 'name',
    description: 'Enter name of band',
    selector: (row) => row.orderInfo.orderObj.clientname,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },
  {
    name: 'Date',
    key: 'date',
    description: 'Enter date',
    selector: (row) => row.createdAt && row.createdAt.substring(0, 10),
    sortable: true,
    required: true,
    inputType: InputType.DATE,
  },
  {
    name: 'Description of Band',
    key: 'description',
    description: 'Enter description of band',
    selector: (row) => row.orderInfo.orderObj.order,
    sortable: true,
    required: false,
    inputType: InputType.TEXT,
  },
  {
    name: 'Status',
    key: 'billing_status',
    description: 'Enter status',
    selector: (row) => row.billing_status,
    sortable: true,
    required: false,
    inputType: InputType.TEXT,
  },
  {
    name: 'Amount',
    key: 'amount',
    description: 'Enter amount',
    selector: (row) => row.serviceInfo.amount,
    sortable: true,
    required: false,
    inputType: InputType.TEXT,
  },
];

const ServicesSchema = [
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
    name: 'Name',
    key: 'name',
    description: 'Enter name',
    selector: (row) => row.name,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },
  {
    name: 'Panel',
    key: 'panel',
    description: 'Enter panel',
    selector: (row) => (row.panel ? 'Yes' : 'No'),
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },
  {
    name: 'price',
    key: 'price',
    description: 'price',
    selector: (row) =>
      row.contracts.map((obj) => {
        return obj.price;
      }),
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },
];

export {
  BandSchema,
  // BillServiceCreateSchema,
  // BillServiceSchema,
  CollectionSchema,
  EmployeeSchema,
  LocationSchema,
  ModulesSchema,
  OnboardingEmployeeSchema,
  OrganisationSchema,
  PaymentDetailsSchema,
  PaymentSchema,
  RevenueSchema,
  ServicesSchema,
};
