export interface CommandResultCvData {
  baseData: CvBaseData;
  workExperience: CvWorkExperience[],
  education: CvEducation[],
}

export interface CvBaseData {
  name: string;
  titles: string[];
  country: string;
  dateOfBirth: string;
}

export interface CvWorkExperience {
  start: string;
  end: string;
  jobTitle: string;
  companyName: string;
}

export interface CvEducation {
  start: string;
  end: string;
  title: string;
  description: string;
}
