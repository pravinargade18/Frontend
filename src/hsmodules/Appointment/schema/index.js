import { format, formatDistanceToNowStrict } from 'date-fns';

export const AppointmentSchema = [
  {
    name: 'S/N',
    key: 'sn',
    description: 'SN',
    selector: (row) => row.sn,
    sortable: true,
    inputType: 'HIDDEN',
  },
  {
    name: 'Date/Time',
    key: 'date',
    description: 'Date/Time',
    selector: (row) =>
      row.start_time
        ? format(new Date(row.start_time.slice(0, 19)), 'dd/MM/yyyy HH:mm')
        : '',
    sortable: true,
    required: true,
    inputType: 'TEXT',
  },
  {
    name: 'First Name',
    key: 'firstname',
    description: 'First Name',
    selector: (row) => row.firstname,
    sortable: true,
    required: true,
    inputType: 'TEXT',
  },

  {
    name: 'Last Name',
    key: 'lastname',
    description: 'Last Name',
    selector: (row) => row.lastname,
    sortable: true,
    required: true,
    inputType: 'TEXT',
  },
  {
    name: 'Classification',
    key: 'classification',
    description: 'Classification',
    selector: (row) => row.appointmentClass,
    sortable: true,
    required: true,
    inputType: 'TEXT',
  },
  {
    name: 'Location',
    key: 'location',
    description: 'Location',
    selector: (row) => row.location_type,
    sortable: true,
    required: true,
    inputType: 'TEXT',
  },
  {
    name: 'Type',
    key: 'type',
    description: 'Type',
    selector: (row) => row.appointment_type,
    sortable: true,
    required: true,
    inputType: 'TEXT',
  },
  {
    name: 'Status',
    key: 'status',
    description: 'Status',
    selector: (row) => row.appointment_status,
    sortable: true,
    required: true,
    inputType: 'TEXT',
  },
  {
    name: 'Reason',
    key: 'reason',
    description: 'Reason',
    selector: (row) => row.appointment_reason,
    sortable: true,
    required: true,
    inputType: 'TEXT',
  },
  {
    name: 'Practitioner',
    key: 'practitioner',
    description: 'Practitioner',
    selector: (row) => row.practitioner_name,
    sortable: true,
    required: true,
    inputType: 'TEXT',
  },
];

// TODO: Add a new  schema for Checkin
