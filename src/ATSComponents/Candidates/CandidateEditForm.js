import PropTypes from "prop-types"
import React, { useState, useEffect, useRef } from "react"
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardBody,
    Input,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
} from "reactstrap"
import WorkType1 from "../Common/WorkType1"
import WorkType3 from "../Common/WorkType3"

import { InputText } from "primereact/inputtext"
import { Dropdown } from "primereact/dropdown"
import { Calendar } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ConfirmDialog } from "primereact/confirmdialog";
import { InputNumber } from "primereact/inputnumber";
import { TreeSelect } from "primereact/treeselect";
import { Checkbox } from "primereact/checkbox";
import { Editor } from "primereact/editor";
import Select from 'react-select';
import { Toast } from 'primereact/toast';
import { Link } from "react-router-dom";
import { FileUpload } from 'primereact/fileupload';
//i18n

const CandidateEditForm = props => {
    // document.title = "CandidateEditForm | Veltrix - React Admin & CandidateEditForm Template";
    const [selectedCompany, setSelectedCompany] = useState(null);


    // Document card start

    
    const [displayDialog, setDisplayDialog] = useState(false);
     const [documents, setDocuments] = useState([{
        type: "Aadhar",
        subject: "Aadhar card",
        // file: "lavan-file.pdf"
      }]);

       const [selectedDocument, setSelectedDocument] = useState(null);
       const [subject, setSubject] = useState('');

       const handleUpload = (e) => {
  };


       // Open the modal to add a new doc
  
    // Sample status options (Renamed to setstatus1)
    const setstatus1 = [
      { name: 'Draft', code: 'draft' },
      { name: 'Final', code: 'final' },
      { name: 'Archived', code: 'archived' },
    ];
  
    // Custom uploader function (Renamed to customBase64Uploader2)
    const customBase64Uploader2 = (event) => {
      setFile(event.files[0]);
    };
  
    // Handle Add Document
    const handleAddDocument = () => {
      if (selectedStatus1 && subject && file) {
        const newDocument = { type: selectedStatus1.name, subject, file };
        setDocuments([...documents, newDocument]);
        alert('Document added successfully!');
        setDisplayDialog(false); // Close the modal after adding the document
      } else {
        alert('Please fill all the fields.');
      }
    };
  
    // Open the modal to add a new document
    const openAddDocumentDialog = () => {
      setDisplayDialog(true);
    };
  
    // Close the modal
    const closeAddDocumentDialog = () => {
      setDisplayDialog(false);
    };
  

    const groupedDocuments = [
    {
      label: 'Proof of Identity',
      items: [
        { label: 'Aadhaar Card', value: 'Aadhaar Card' },
        { label: 'Passport', value: 'Passport' },
        { label: 'Voter ID', value: 'Voter ID' },
        { label: 'PAN Card', value: 'PAN Card' },
        { label: 'Driver\'s License', value: 'Driver\'s License' }
      ]
    },
    {
      label: 'Educational Qualification Documents',
      items: [
        { label: '10th, 12th Standard Mark Sheets', value: '10th, 12th Standard Mark Sheets' },
        { label: 'Degree/Diploma Certificates', value: 'Degree/Diploma Certificates' },
        { label: 'Consolidated Mark Sheets', value: 'Consolidated Mark Sheets' },
        { label: 'Professional Certification Documents', value: 'Professional Certification Documents' }
      ]
    },
    {
      label: 'Employment-Related Documents',
      items: [
        { label: 'Offer Letter', value: 'Offer Letter' },
        { label: 'Appointment Letter', value: 'Appointment Letter' },
        { label: 'Resume/Curriculum Vitae', value: 'Resume/Curriculum Vitae' },
        { label: 'Previous Employment Experience Certificates', value: 'Previous Employment Experience Certificates' },
        { label: 'Relieving Letters from Previous Employers', value: 'Relieving Letters from Previous Employers' },
        { label: 'Service Certificate', value: 'Service Certificate' },
        { label: 'Last Drawn Salary Slip', value: 'Last Drawn Salary Slip' }
      ]
    },
    {
      label: 'Contact and Address Proof',
      items: [
        { label: 'Permanent Address Proof', value: 'Permanent Address Proof' },
        { label: 'Current Residential Address Proof', value: 'Current Residential Address Proof' },
        { label: 'Local Address Proof', value: 'Local Address Proof' },
        { label: 'Address Verification Documents', value: 'Address Verification Documents' },
        { label: 'Contact Information Form', value: 'Contact Information Form' }
      ]
    },
    {
      label: 'Financial and Tax-Related Documents',
      items: [
        { label: 'PAN Card', value: 'PAN Card' },
        { label: 'Bank Account Details', value: 'Bank Account Details' },
        { label: 'Cancelled Cheque', value: 'Cancelled Cheque' },
        { label: 'Form 16 from Previous Employer', value: 'Form 16 from Previous Employer' },
        { label: 'Tax Identification Documents', value: 'Tax Identification Documents' }
      ]
    },
    {
      label: 'Personal and Medical Documents',
      items: [
        { label: 'Passport-Size Photographs', value: 'Passport-Size Photographs' },
        { label: 'Birth Certificate', value: 'Birth Certificate' },
        { label: 'Marriage Certificate (if applicable)', value: 'Marriage Certificate (if applicable)' },
        { label: 'Passport Details', value: 'Passport Details' },
        { label: 'Medical Fitness Certificate', value: 'Medical Fitness Certificate' },
        { label: 'Police Verification Certificate', value: 'Police Verification Certificate' }
      ]
    },
    {
      label: 'Legal and Compliance Documents',
      items: [
        { label: 'Background Verification Consent Form', value: 'Background Verification Consent Form' },
        { label: 'Non-Disclosure Agreement (NDA)', value: 'Non-Disclosure Agreement (NDA)' },
        { label: 'Employment Bond (if applicable)', value: 'Employment Bond (if applicable)' },
        { label: 'Declaration of No Criminal Record', value: 'Declaration of No Criminal Record' }
      ]
    },
    {
      label: 'Statutory Documentation',
      items: [
        { label: 'Employee Provident Fund (EPF) Registration Form', value: 'Employee Provident Fund (EPF) Registration Form' },
        { label: 'Employee State Insurance (ESI) Form', value: 'Employee State Insurance (ESI) Form' },
        { label: 'Professional Tax Registration Details', value: 'Professional Tax Registration Details' }
      ]
    },
    {
      label: 'Emergency Contact and Nominee Details',
      items: [
        { label: 'Emergency Contact Information Form', value: 'Emergency Contact Information Form' },
        { label: 'Nominee Details for Insurance and Other Benefits', value: 'Nominee Details for Insurance and Other Benefits' },
        { label: 'Personal References', value: 'Personal References' }
      ]
    },
    {
      label: 'Additional Specialized Documents (Depending on Role/Industry)',
      items: [
        { label: 'Professional License Certificates', value: 'Professional License Certificates' },
        { label: 'Specialized Skill Certification', value: 'Specialized Skill Certification' },
        { label: 'Work Permit/Visa Documents (for Foreign Nationals)', value: 'Work Permit/Visa Documents (for Foreign Nationals)' },
        { label: 'Security Clearance Certificates', value: 'Security Clearance Certificates' }
      ]
    }
  ];


   const groupedItemTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <i className="pi pi-file mr-2"></i>
        <div>{option.label}</div>
      </div>
    );
  };

  

    // Document card end




    const customWorkTypes = [
    {
      name: 'User Management',
      color: '#000000',
      id: 'custom-task',
      statuses: ['Pending', 'Processing', 'Completed']
    }
  ];

  const customWorkTypes1 = [
    {
      name: 'Rohit Kumar - Developer',
      color: '#000000',
      id: 'custom-task',
      statuses: ['Pending', 'Processing', 'Completed']
    }
  ];

  const customWorkTypes2 = [
    {
      name: 'Hold',
      color: '#000000',
      id: 'custom-task',
      statuses: ['Pending', 'Processing', 'Completed']
    },
     {
      name: 'In Review',
      color: '#000000',
      id: 'in-review',
      statuses: ['Pending', 'Processing', 'Completed']
    },
     {
      name: 'Done Closed',
      color: '#000000',
      id: 'done-closed',
      statuses: ['Pending', 'Processing', 'Completed']
    }
  ];


  const customWorkTypes3 = [
    {
      name: 'Hold',
      color: '#000000',
      id: 'custom-task',
      statuses: ['Pending', 'Processing', 'Completed']
    },
     {
      name: 'In Review',
      color: '#000000',
      id: 'in-review',
      statuses: ['Pending', 'Processing', 'Completed']
    },
     {
      name: 'Done Closed',
      color: '#000000',
      id: 'done-closed',
      statuses: ['Pending', 'Processing', 'Completed']
    }
  ];


  const customWorkTypes4 = [
    {
      name: 'Low',
      color: '#000000',
      id: 'custom-task',
      statuses: ['Pending', 'Processing', 'Completed']
    },
     {
      name: 'Medium',
      color: '#000000',
      id: 'in-review',
      statuses: ['Pending', 'Processing', 'Completed']
    },
     {
      name: 'High',
      color: '#000000',
      id: 'done-closed',
      statuses: ['Pending', 'Processing', 'Completed']
    }
  ];

  const customWorkTypes5 = [
    {
      name: 'Active',
      color: '#000000',
      id: 'custom-task',
      statuses: ['Pending', 'Processing', 'Completed']
    },
     {
      name: 'In Active',
      color: '#000000',
      id: 'in-active',
      statuses: ['Pending', 'Processing', 'Completed']
    },
     {
      name: 'DND (Do Not Disturb)',
      color: '#000000',
      id: 'dnd',
      statuses: ['Pending', 'Processing', 'Completed']
    },
    {
      name: 'Blacklisted',
      color: '#000000',
      id: 'blacklisted',
      statuses: ['Pending', 'Processing', 'Completed']
    }
  ];



    const companies = [
        { label: 'Tech Solutions Inc.', value: 'Tech Solutions Inc.' },
        { label: 'Innovatech Ltd.', value: 'Innovatech Ltd.' },
        { label: 'Future Vision Corp.', value: 'Future Vision Corp.' },
        { label: 'Global Dynamics', value: 'Global Dynamics' }
    ];
    const [jobtitle, setJobtitle] = useState("Web Developer");
    const [workplaceType, setWorkplaceType] = useState(null);

    const workplaceOptions = [
        { name: 'Work from Office (WFO)', code: 'WFO' },
        { name: 'Work from Home (WFH)', code: 'WFH' },
        { name: 'Work from Remote (WFR)', code: 'WFR' }
    ];

    const [jobType, setJobType] = useState(null);

    const jobTypeOptions = [
        { name: 'Full Time', code: 'FT' },
        { name: 'Part Time', code: 'PT' },
        { name: 'Contract', code: 'CON' }
    ];

    const [selectedDepartment, setSelectedDepartment] = useState(null);

    const departments = [
        { label: 'Account Finance Team', value: 'Account Finance Team' },
        { label: 'SPG US Staffing', value: 'SPG US Staffing' },
        { label: 'Vitel Development Team', value: 'Vitel Development Team' },
        { label: 'Support Team', value: 'Support Team' },
        { label: 'NOC Team', value: 'NOC Team' },
        { label: 'Digital Marketing Team', value: 'Digital Marketing Team' },
        { label: 'Executive Team', value: 'Executive Team' },
        { label: 'Operations Team', value: 'Operations Team' }
    ];


    const [selectedLocation, setSelectedLocation] = useState(null);

    const locations = [
        { label: 'Hyderabad', value: 'Hyderabad' },
        { label: 'Chennai', value: 'Chennai' },
        { label: 'Mumbai', value: 'Mumbai' },
        { label: 'Bangalore', value: 'Bangalore' },
        { label: 'Delhi', value: 'Delhi' }
    ];

    const [selectedManager, setSelectedManager] = useState(null);
    const managers = [
        { name: 'Ram Mohan', role: 'HR', code: 'HR' },
        { name: 'Sita Verma', role: 'Manager', code: 'MGR' },
        { name: 'Amit Sharma', role: 'Team Lead', code: 'TL' },
        { name: 'Ravi Kapoor', role: 'CEO', code: 'CEO' },
        { name: 'Neha Patel', role: 'Intern', code: 'INT' }
    ];
    const [openings, setOpenings] = useState("5");
    const [totalExperience, setTotalExperience] = useState("3");
    const [email, setEmail] = useState(null);
    const [address, setAddress] = useState();
    const [minSalary, setMinSalary] = useState("600000");
    const [maxSalary, setMaxSalary] = useState("800000");
    // const [jobStatus, setJobStatus] = useState(null);
    const [jobStartDate, setJobStartDate] = useState(null);
    const [jobendDate, setJobendDate] = useState(null);
    const [jobActualDate, setJobActualDate] = useState(null);

    const [selectedMod, setSelectedMod] = useState(null)
    const [selectedWatchers, setSelectedWatchers] = useState(null)
    const [approvalStatus, setApprovalStatus] = useState(null)
    const [selectedStatus, setSelectedStatus] = useState(null);
    const watchersOption = [
        { label: "Ravi Sharma - Developer", code: "HYD" },
        { label: "Suresh Patel - Devops Engineer", code: "CHN" },
        { label: "Kavitha Sharma - UX Designer", code: "MUM" },
        { label: "Rakesh Kumar - Project co-ordinator", code: "BLR" },
      ]

      const modOptions = [
        { label: "Home page", code: "HYD" },
        { label: "Backend page", code: "CHN" },
        { label: "HR Management", code: "MUM" },
        { label: "Recruitement page", code: "BLR" },
      ]

      const statusOptions = [
        { label: "Active", code: "ACT" },
        { label: "In Active", code: "INACT" },
        { label: "DND (Do Not Disturb)", code: "DND" },
        { label: "Blacklisted", code: "BLK" },
      ]

    // const jobStatusOptions = [
    //     { label: 'Active', value: 'open' },
    //     { label: 'InActive', value: 'closed' },
    //     { label: 'Hold', value: 'hold' },
    //     { label: 'Blacklisted', value: 'blacklisted' }
    // ];

    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);

    // categories

    const [categories] = useState([
        {
            key: "0",
            label: "Skills",
            children: [
                {
                    key: "0-0",
                    label: "Frontend",
                    children: [
                        { key: "0-0-0", label: "React" },
                        { key: "0-0-1", label: "Angular" },
                        { key: "0-0-2", label: "Bootstrap" },
                    ],
                },
                {
                    key: "0-1",
                    label: "Backend",
                    children: [
                        { key: "0-1-0", label: "Python" },
                        { key: "0-1-1", label: "Java" },
                        { key: "0-1-2", label: "C#" },
                    ],
                },
                {
                    key: "0-2",
                    label: "QA",
                    children: [
                        { key: "0-2-0", label: "Manual" },
                        { key: "0-2-1", label: "Automation" },
                    ],
                },
            ],
        },
    ]);

    const [selectedCategoryKey, setSelectedCategoryKey] = useState(null);

    //groups

    const [groups] = useState([
        {
            key: "0",
            label: "Skills",
            children: [
                {
                    key: "0-0",
                    label: "Frontend",
                    children: [
                        { key: "0-0-0", label: "React" },
                        { key: "0-0-1", label: "Angular" },
                        { key: "0-0-2", label: "Bootstrap" },
                    ],
                },
                {
                    key: "0-1",
                    label: "Backend",
                    children: [
                        { key: "0-1-0", label: "Python" },
                        { key: "0-1-1", label: "Java" },
                        { key: "0-1-2", label: "C#" },
                    ],
                },
                {
                    key: "0-2",
                    label: "QA",
                    children: [
                        { key: "0-2-0", label: "Manual" },
                        { key: "0-2-1", label: "Automation" },
                    ],
                },
            ],
        },
    ]);

    const [selectedGroupKey, setSelectedGroupKey] = useState(null);


    //editor

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    };

    const header = renderHeader();

    const [content, setContent] = useState(`<strong>Project Overview :</strong> <br>
This project is aimed at developing a user-friendly dashboard for internal reporting. It involves planning, coordinating, and executing a series of tasks that contribute to the successful delivery of the final outcome. The goal is to ensure timely completion with a strong focus on quality and efficiency.

As the assigned team member, you will be responsible for managing your specific tasks, collaborating with other departments when needed, and proactively addressing any challenges that arise. Regular updates and clear communication are expected to keep the project on track and aligned with its objectives.`);
    const maxWords = 500;

    // Function to calculate word count
    const calculateWordCount = (text) => {
        const words = text
            .trim()
            .replace(/<[^>]*>/g, "") // Remove HTML tags
            .split(/\s+/); // Split by whitespace
        return words.filter((word) => word).length; // Filter out empty words
    };

    // Current word count
    const currentWordCount = calculateWordCount(content);

    // Handle editor input
    const handleEditorChange = (e) => {
        const text = e.htmlValue || ""; // Get the HTML content
        if (calculateWordCount(text) <= maxWords) {
            setContent(text); // Only update content if within word limit
        }
    };

    //skills

    const [skillsOptions, setSkillsOptions] = useState([
        { value: "java", label: "Java" },
        { value: "react", label: "React" },
        { value: "nodejs", label: "Node.js" },
        // Add more skill options as needed
    ]);

    const [selectedPrimarySkills, setSelectedPrimarySkills] = useState([]);
    const [selectedSecondarySkills, setSelectedSecondarySkills] = useState([]);

    // Handle Primary Skills Selection
    const handlePrimarySkillsChange = (selectedOptions) => {
        setSelectedPrimarySkills(selectedOptions ? selectedOptions.map(option => option.value) : []);
    };

    // Handle Secondary Skills Selection
    const handleSecondarySkillsChange = (selectedOptions) => {
        setSelectedSecondarySkills(selectedOptions ? selectedOptions.map(option => option.value) : []);
    };

    const [selectedJobFunction, setSelectedJobFunction] = useState(null);

    const jobFunctions = [
        { name: 'In Progress', code: 'SE' },
        { name: 'Hold', code: 'PM' },
        { name: 'Done Closed', code: 'DS' },
        { name: 'In Review', code: 'UI' },
        { name: 'Ready for QA', code: 'MM' },
        { name: 'QA in Progress', code: 'MM' },
        { name: 'Blocked', code: 'MM' }

    ];

    const [selectedSeniority, setSelectedSeniority] = useState(null);

    const seniorityLevels = [
        { name: 'High', code: 'JR' },
        { name: 'Medium', code: 'ML' },
        { name: 'Low', code: 'SR' }
    ];

    // screening questions
    const [queVisible, setQueVisible] = useState(false);
    const [isQualificationRequired, setIsQualificationRequired] = useState(false);
    const [isQualificationRequired1, setIsQualificationRequired1] = useState(false);

    const [questionsData, setQuestionsData] = useState([]);
    const [question, setQuestion] = useState("CSS");
    const [answer, setAnswer] = useState("3");
    const [question1, setQuestion1] = useState("Html");
    const [answer1, setAnswer1] = useState("3");

    // Handle form submission
    const handleCreate = () => {
        // Add the new question data to the DataTable
        const newQuestion = {
            question: question,
            answer: answer,
            qualificationRequired: isQualificationRequired ? "Yes" : "No"
        };
        setQuestionsData([...questionsData, newQuestion]);

        // Reset the form fields
        setQuestion("");
        setAnswer("");
        setIsQualificationRequired(false);

        // Close the dialog
        setQueVisible(false);
    };


    // screening questions
    const [questions, setQuestions] = useState([]);

    // Function to add a new question card
    const handleAddQuestion = () => {
        setQuestions([
            ...questions,
            { skill: "", experience: "", qualification: false },
        ]);
    };

    // Function to update a question
    const handleQuestionChange = (index, field, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index][field] = value;
        setQuestions(updatedQuestions);
    };

    // Function to remove a question card
    const handleRemoveQuestion = (index) => {
        const updatedQuestions = questions.filter((_, i) => i !== index);
        setQuestions(updatedQuestions);
    };

    // toast msg

    const toast = useRef(null);

    const showMessage = () => {
        toast.current.show({ severity: 'info', summary: 'Job ID 3048 Saved' });
    };
    const showCancel = () => {
        toast.current.show({ severity: 'error', summary: 'Cancelled', life: 3000 });
    }

    // sample data starts
    const [category, setCategory] = useState("Frontend");
    const [group, setGroup] = useState("Html, CSS");

    // sample data ends

    return (
        <React.Fragment>
            <div className="page-content create-ajob">
                <Container fluid>
                    <div className="page-title-box">
                        <Row className="align-items-center">
                            <Col md={6}>
                                <h1 className="page-title">Create a Task</h1>
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item active">
                                        Add a task with key details for clear tracking and execution. Include a brief description, assign it to the right person, fill in system fields.
                                    </li>
                                </ol>
                            </Col>
                            <Col md={6}>
                                <div className="d-flex justify-content-end">
                                    <Toast ref={toast} />
                                    {/* <Link to="/">
                                    </Link> */}
                                    <Link to="/allactive-jobs">
                                        <button type="submit" class="btn btn-success me-2" >  <i className="pi pi-save me-1"></i> Save </button>

                                    </Link>

                                    <Link to="/allactive-jobs">
                                        <Button
                                            color="primary"
                                            className="btn btn-primary waves-effect waves-light me-2 cancel-outlinebtn"
                                        >
                                            <i className="pi pi-times me-1"></i>
                                            Cancel
                                        </Button>
                                    </Link>

                                </div>

                            </Col>
                        </Row>
                    </div>

                    <Row>
                        {/* 1st Row */}
                        <Col xl={4}>
                            <Card className="bg-form">
                                <CardBody>
                                    <h4 className="card-title mb-2">Project & Assignment</h4>
                                    <Row>
                                        <Col xl={12}>
                                            <div className="">

                                                 <Row className="mt-2 align-items-center">
                                                    <Col xl={3}>
                                                        <label htmlFor="jobId">Project Name</label>
                                                    </Col>
                                                    <Col xl={9}>
                                                        <WorkType1 />
                                                    </Col>
                                                </Row>

                                                  <Row className="mt-2 align-items-center">
                                                    <Col xl={3}>
                                                        <label htmlFor="jobStatus">Select Module</label>
                                                    </Col>
                                                    <Col xl={9}>
                                                        {/* <div className="p-field card mb-0">
                                                            <Dropdown
                                                                id="jobStatus"
                                                                value={selectedMod}
                                                                options={modOptions}
                                                                onChange={(e) => setSelectedMod(e.value)}
                                                                placeholder="Select Job Status"
                                                            />
                                                        </div> */}
                                                        
                                                      <WorkType1 initialWorkTypes={customWorkTypes} />
                                                    </Col>
                                                </Row>

                                                <Row className="mt-2 align-items-center">
                                                    <Col xl={3}>
                                                        <label htmlFor="jobId">Project Manager</label>
                                                    </Col>
                                                    <Col xl={9}>
                                                        <InputText id="jobId" value="Sneha Mehta" readOnly className="w-full" />
                                                    </Col>
                                                </Row>

                                                 <Row className="mt-2 align-items-center">
                                                    <Col xl={3}>
                                                        <label htmlFor="jobStatus">Add Watcher</label>
                                                    </Col>
                                                    <Col xl={9}>
                                                        {/* <div className="p-field card mb-0">
                                                            <Dropdown
                                                                id="jobStatus"
                                                                value={selectedWatchers}
                                                                options={watchersOption}
                                                                onChange={(e) => setSelectedWatchers(e.value)}
                                                                placeholder="Select Job Status"
                                                            />
                                                        </div> */}

                                                        <WorkType1 initialWorkTypes={customWorkTypes1} />

                                                    </Col>
                                                </Row>

                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>


                            <Card className="bg-form">
                                <CardBody>
                                    <h4 className="card-title mb-2">Timeline & Effort</h4>
                                    <Row>
                                        <Col xl={12}>
                                            <div className="">
                                                <Row>
                                                    <Col xl={12} >

                                                    <Row className="mt-2 align-items-center">
                                                            <Col xl={3}>
                                                                <label htmlFor="minSalary" className="block mb-2">
                                                                    Work Hours
                                                                </label>
                                                            </Col>
                                                            <Col xl={9}>
                                                                <InputNumber
                                                                    inputId="minSalary"
                                                                    value="12"
                                                                    onValueChange={(e) => setMinSalary(e.value)}
                                                                    placeholder="In Hours"
                                                                    className="w-full"
                                                                />
                                                            </Col>
                                                        </Row>

                                                        <Row className="mt-2 align-items-center">
                                                            <Col xl={3}>
                                                               <label htmlFor="jobStartDate" className="block mb-2">Start Date</label>
                                                            </Col>
                                                            <Col xl={9}>
                                                                    <Calendar
                                                                    id="jobStartDate"
                                                                    value={jobStartDate}
                                                                    onChange={(e) => setJobStartDate(e.value)}
                                                                    dateFormat="dd/mm/yy"
                                                                    placeholder="20/05/2025"
                                                                    className="w-full activejobdrop"
                                                                    showIcon
                                                                    />
                                                                </Col>
                                                            </Row>

                                                             <Row className="mt-2 align-items-center">
                                                            <Col xl={3}>
                                                               <label htmlFor="jobendDate" className="block mb-2">Due Date</label>
                                                            </Col>
                                                            <Col xl={9}>
                                                                    <Calendar
                                                                    id="jobendDate"
                                                                    value={jobendDate}
                                                                    onChange={(e) => setJobendDate(e.value)}
                                                                    dateFormat="dd/mm/yy"
                                                                    placeholder="20/05/2025"
                                                                    className="w-full activejobdrop"
                                                                    showIcon
                                                                    />
                                                                </Col>
                                                            </Row>


                                                              <Row className="mt-2 align-items-center">
                                                            <Col xl={3}>
                                                               <label htmlFor="jobActualDate" className="block mb-2">Actual Date</label>
                                                            </Col>
                                                            <Col xl={9}>
                                                                    <Calendar
                                                                    id="jobActualDate"
                                                                    value={jobActualDate}
                                                                    onChange={(e) => setJobActualDate(e.value)}
                                                                    dateFormat="dd/mm/yy"
                                                                    placeholder="20/05/2025"
                                                                    className="w-full activejobdrop"
                                                                    showIcon
                                                                    />
                                                                </Col>
                                                            </Row>

                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                             

                        

                        </Col>


                        {/* 2nd Row */}

                        <Col xl={4}>
                            <Card className="bg-form">
                                <CardBody>
                                    <h4 className="card-title mb-2">Work Type Information</h4>
                                    <Row>
                                        <Col xl={12}>
                                            <div className="">

                                                <Row className="mt-2 align-items-center">
                                                            <Col xl={3}>
                                                                <label
                                                                    htmlFor="integer"
                                                                    className=" block"
                                                                >
                                                                     WorkType
                                                                </label>
                                                            </Col>
                                                            <Col xl={9}>
                                                                {/* <InputText
                                                                    id="integer"
                                                                    className="w-full"
                                                                    placeholder="Task-101"
                                                                    
                                                                /> */}

                                                                <WorkType3 />
                                                            </Col>
                                                        </Row>


                                                 <Row className="mt-2 align-items-center">
                                                            <Col xl={3}>
                                                                <label
                                                                    htmlFor="integer"
                                                                    className=" block"
                                                                >
                                                                     Code
                                                                </label>
                                                            </Col>
                                                            <Col xl={9}>
                                                                <InputText
                                                                    id="integer"
                                                                    className="w-full"
                                                                    placeholder="Task-101"
                                                                    
                                                                />
                                                            </Col>
                                                        </Row>


                                                         <Row className="mt-2 align-items-center">
                                                            <Col xl={3}>
                                                                <label
                                                                    htmlFor="integer"
                                                                    className=" block"
                                                                >
                                                                    Summary
                                                                </label>
                                                            </Col>
                                                            <Col xl={9}>
                                                                <InputText
                                                                    id="integer"
                                                                    className="w-full"
                                                                    placeholder="Add User Role Feature"
                                                                    
                                                                />
                                                            </Col>
                                                        </Row>

                                               

                                                <Row>
                                                    <Col xl={12}>
                                                        <Row className="mt-2 align-items-center">
                                                            <Col xl={3}>
                                                                <label className="mb-0">Status</label>
                                                            </Col>
                                                            <Col xl={9}>
                                                                {/* <div className="p-field mb-0 card">
                                                                    <Dropdown
                                                                        value={selectedJobFunction}
                                                                        onChange={(e) => setSelectedJobFunction(e.value)}
                                                                        options={jobFunctions}
                                                                        optionLabel="name"
                                                                        placeholder="In Progress"
                                                                        className="w-full"
                                                                    />
                                                                </div> */}
                                                                 <WorkType1 initialWorkTypes={customWorkTypes3} />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col xl={12}>
                                                        <Row className="mt-2 align-items-center">
                                                            <Col xl={3}>
                                                                <label className="mb-0">Priority</label>
                                                            </Col>
                                                            <Col xl={9}>
                                                                {/* <div className="p-field mb-0 card">
                                                                    <Dropdown
                                                                        value={selectedSeniority}
                                                                        onChange={(e) => setSelectedSeniority(e.value)}
                                                                        options={seniorityLevels}
                                                                        optionLabel="name"
                                                                        placeholder="Medium"
                                                                        className="w-full"
                                                                    />
                                                                </div> */}

                                                                 <WorkType1 initialWorkTypes={customWorkTypes4} />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col xl={12}>
                                                        {/* <Row className="sidebar d-flex align-items-center">
                                                            <Col xl={6}>
                                                                <label
                                                                    htmlFor="integer"
                                                                    className=" block mb-2"
                                                                >
                                                                    Description
                                                                </label>

                                                            </Col>
                                                            <Col lg={6} className="d-flex justify-content-end mt-2">
                                                                <Button color="primary" className="btn btn-primary aibtn">
                                                                    <i class="pi pi-star me-1"></i>
                                                                    Write with AI
                                                                </Button>
                                                            </Col>
                                                        </Row> */}
                                                        {/* <Row className="mt-2 align-items-center">

                                                            <Col xl={12}>
                                                                <div className="p-field mb-0">
                                                                    <Editor value={content} onTextChange={handleEditorChange} headerTemplate={header} style={{ height: '320px' }}
                                                                        className="w-full" />

                                                                </div>
                                                                <div style={{ marginTop: "10px", textAlign: "right" }}>
                                                                    <span>
                                                                        {currentWordCount}/{maxWords} words
                                                                    </span>
                                                                </div>
                                                            </Col>
                                                        </Row> */}
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>

                            <Card className="bg-form screening-que">
                                <CardBody>
                                    <h4 className="card-title mb-3">Description</h4>
                                   


                                    <div class="add-que-card mb-4">
                                      

                                            <Row>
                                                    <Col xl={12}>
                                                        <Row className="sidebar d-flex align-items-center">
                                                            <Col xl={6}>
                                                                <label
                                                                    htmlFor="integer"
                                                                    className=" block mb-2"
                                                                >
                                                                    Description
                                                                </label>

                                                            </Col>
                                                            <Col lg={6} className="d-flex justify-content-end mt-2">
                                                                <Button color="primary" className="btn btn-primary aibtn">
                                                                    <i class="pi pi-star me-1"></i>
                                                                    Write with AI
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                        <Row className="mt-2 align-items-center">

                                                            <Col xl={12}>
                                                                <div className="p-field mb-0">
                                                                    <Editor value={content} onTextChange={handleEditorChange} headerTemplate={header} style={{ height: '100px' }}
                                                                        className="w-full" />

                                                                </div>
                                                                {/* <div style={{ marginTop: "10px", textAlign: "right" }}>
                                                                    <span>
                                                                        {currentWordCount}/{maxWords} words
                                                                    </span>
                                                                </div> */}
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                    </div>

                                  

                                   

                                    <ConfirmDialog />
                                </CardBody>
                            </Card>

                               

                       
                            

                        </Col>


                         <Col xl={4}>
                           

                           

                                

                                <Card className="bg-form">
                                              <CardBody>
                                                <h4 className="card-title mb-2">Documents</h4>
                                                <Row>
                                                  <Col xl={12}>
                                                    <div>
                                                      {/* Button to trigger the modal */}
                                                      {/* <Button
                                                      label="Add Document"
                                                      icon="pi pi-plus"
                                                      className="p-button-success"
                                                      onClick={openAddDocumentDialog}
                                                    /> */}
                            
                            
                            
                                                      {/* DataTable to display added documents */}
                                                      <Row className="mt-2">
                                                        <Col xl={12}>
                                                          {/* <h5>Added Documents:</h5> */}
                                                          <DataTable value={documents} rows={5} className="p-datatable-gridlines"
                                                            emptyMessage={<div className="empty-message-custom">No education details found.</div>}>
                                                            <Column field="type" header="Type" />
                                                            <Column field="subject" header="Subject" />
                                                            <Column field="file" header="Attachment" body={(rowData) => rowData.file ? rowData.file.name : 'No file'} />
                                                          </DataTable>
                                                        </Col>
                                                      </Row>
                                                      <div className="block d-flex justify-content-end align-items-center">
                                                        <a color="primary" className="anchr-title  mt-3" onClick={openAddDocumentDialog}>
                                                          <i className="pi pi-plus me-1"></i> Add More
                                                        </a>
                                                      </div>
                            
                                                    </div>
                                                  </Col>
                                                </Row>
                                              </CardBody>
                            
                                              {/* Dialog for adding document */}
                                              <Dialog
                                                header="Add Document"
                                                visible={displayDialog}
                                                onHide={closeAddDocumentDialog}
                                                style={{ width: "30vw" }}
                                                footer={
                                                  <div>
                                                    {/* <Button label="Cancel" icon="pi pi-times" onClick={closeAddDocumentDialog} className="p-button-text" />
                            
                                                  <Button label="Add" icon="pi pi-check" onClick={handleAddDocument} className="p-button-success" /> */}
                                                    <Button color="primary btn-main mr-2" onClick={closeAddDocumentDialog}>
                                                      Ok
                                                    </Button>
                                                    {/* <Button color="btn btn-primary cancel-outlinebtn" onClick={handleAddDocument}>
                                                    <i className="pi pi-times me-1"></i>
                                                    Cancel
                                                  </Button> */}
                                                  </div>
                                                }
                                              >
                                                <Row className="mt-2 align-items-center">
                                                  <Col xl={3}>
                                                    <label htmlFor="type" className="block mb-2">
                                                      Type
                                                    </label>
                                                  </Col>
                                                  <Col xl={9}>
                                                    {/* <Dropdown
                                                    id="type"
                                                    value={selectedStatus1}
                                                    onChange={(e) => setSelectedStatus1(e.value)} 
                                                    options={setstatus1} 
                                                    optionLabel="name"
                                                    placeholder="Select a Status"
                                                    className="w-full drop-clr bgclr"
                                                  /> */}
                                                    <Dropdown
                                                      value={selectedDocument}
                                                      onChange={(e) => setSelectedDocument(e.value)}
                                                      options={groupedDocuments}
                                                      optionLabel="label"
                                                      optionGroupLabel="label"
                                                      optionGroupChildren="items"
                                                      optionGroupTemplate={groupedItemTemplate}
                                                      className="w-full bgclr"
                                                      placeholder="Select a Document"
                                                    />
                                                  </Col>
                                                </Row>
                            
                                                <Row className="mt-2 align-items-center">
                                                  <Col xl={3}>
                                                    <label htmlFor="subject" className="block mb-2">
                                                      Subject
                                                    </label>
                                                  </Col>
                                                  <Col xl={9}>
                                                    <InputText
                                                      id="subject"
                                                      value={subject}
                                                      onChange={(e) => setSubject(e.target.value)}
                                                      className="w-full"
                                                    />
                                                  </Col>
                                                </Row>
                            
                                                <Row className="mt-2 align-items-center">
                                                  <Col xl={3}>
                                                    <label htmlFor="attachment" className="block mb-2">
                                                      Attachment
                                                    </label>
                                                  </Col>
                                                  <Col xl={9}>
                                                    <FileUpload
                                                      mode="basic"
                                                      name="demo[]"
                                                      url="/api/upload"
                                                      accept="*/*" // Accept all file types
                                                      maxFileSize={1000000}
                                                      onUpload={handleUpload}
                                                    />
                                                  </Col>
                                                </Row>
                                              </Dialog>
                                            </Card>

                                             <Card className="bg-form">
                                <CardBody>
                                    <h4 className="card-title mb-2">Approval & Status</h4>
                                    <Row>
                                        <Col xl={12}>
                                            <div className="">
                                                <Row>
                                                    <Col xl={12}>


                                                              <Row className="mt-2 align-items-center">
                                                    <Col xl={3}>
                                                        <label htmlFor="jobStatus">Status</label>
                                                    </Col>
                                                    <Col xl={9}>
                                                        {/* <div className="p-field card mb-0">
                                                            <Dropdown
                                                                id="jobStatus"
                                                                value={approvalStatus}
                                                                options={statusOptions}
                                                                onChange={(e) => setApprovalStatus(e.value)}
                                                                placeholder="Select Status"
                                                            />
                                                        </div> */}

                                                        <WorkType1 initialWorkTypes={customWorkTypes5} />
                                                    </Col>
                                                </Row>


                                                        

                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>

                            

                        </Col>



                        {/* 3rd Row */}

                        {/* <Col xl={4}>

                           


                        </Col> */}
                    </Row >

                    <Row className="align-items-center mb-3">

                        <Col md={12}>
                            <div className="d-flex justify-content-end">
                                <Link to="/allactive-jobs">
                                    <button type="submit" class="btn btn-success me-2">  <i className="pi pi-save me-1"></i>Save</button>
                                </Link>

                                <Link to="/allactive-jobs">
                                    <Button
                                        color="primary"
                                        className="btn btn-primary waves-effect waves-light me-2 cancel-outlinebtn"
                                        onClick={showCancel}
                                    >
                                        <i className="pi pi-times me-1"></i>
                                        Cancel
                                    </Button>
                                </Link>
                            </div>

                        </Col>
                    </Row>
                </Container >
            </div >
        </React.Fragment >
    )
}

export default CandidateEditForm;
