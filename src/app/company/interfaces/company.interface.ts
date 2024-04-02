export interface Company {
  id:             number;
  company_name:   string;
  ruc:            string;
  contact_number: string;
  web_page:       string;
  corporate_mail: string;
  created?:       Date;
  state:          boolean;
}

// response create
export interface CompanyResponseDTO {
  updated:        Date;
  id:             number;
  created:        Date;
  state:          boolean;
  company_name:   string;
  ruc:            string;
  contact_number: string;
  corporate_mail: string;
  web_page:       string;
  created_by:     number;
}

//create and update
export interface CompanyRequestDTO {
  company_name:   string;
  ruc:            string;
  contact_number: string;
  corporate_mail: string;
  web_page:       string;
}