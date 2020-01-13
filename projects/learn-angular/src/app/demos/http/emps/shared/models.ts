
/**
 * 员工信息
 */
interface Emp {
  ID: string;
  Code: string;
  Name: string;
};


/**
 * 教育经历
 */
interface Edu {
  ID: string;
  EmpID: string;
  SchoolName: string;
  BeginDate: string;
  EndDate: string;
}


/**
 * 工作经历
 */
interface Job {
  ID: string;
  EmpID: string;
  CompanyName: string;
  BeginDate: string;
  EndDate: string;
}


/**
 * EmpDataSet
 */
interface EmpDataSet {
  Emp: Emp[];
  Edu: Edu[];
  Job: Job[];
}


export { Emp, Edu, Job, EmpDataSet };
