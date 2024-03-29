import generalFormModel from "./generalFormModel";
const {
    formField: {
        general_name,
        general_lastname,
        general_age,
        general_place_birth,
        general_civil_status,
        general_profession,
        general_direction,
        general_time_reside,
        general_emergency_name,
        general_emergency_kinship,
        general_previous_direction,
        general_phone,
        general_emergency_phone,
        general_dpi,
        general_nit,
        general_vehicle,
        general_count_vehicle,
        general_license,
        general_license_type,
        general_license_expire,
        general_model,
        general_brand,
        general_email
    }
} = generalFormModel;

export default {
    [general_name.name]: '',
    [general_lastname.name]: '',
    [general_place_birth.name]: '',
    [general_age.name]: '',
    [general_civil_status.name]: '',
    [general_profession.name]: '',
    [general_direction.name]: '',
    [general_time_reside.name]: '',
    [general_emergency_name.name]: '',
    [general_emergency_kinship.name]: '',
    [general_previous_direction.name]: '',
    [general_phone.name]: '',
    [general_emergency_phone.name]: '',
    [general_dpi.name]: '',
    [general_nit.name]: '',
    [general_email.name]: '', 
    [general_model.name]: '', 
    [general_brand.name]: '', 
  
}; 