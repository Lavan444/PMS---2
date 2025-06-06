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
    // Project Information States
    const [projectCode, setProjectCode] = useState("PROJ-2024-001");
    const [projectName, setProjectName] = useState("E-Commerce Platform Development");
    const [selectedModule, setSelectedModule] = useState(null);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [projectManager, setProjectManager] = useState("Sneha Mehta - Senior PM");
    const [selectedProjectStatus, setSelectedProjectStatus] = useState(null);

    // Project Timeline States
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [extendedEndDate, setExtendedEndDate] = useState(null);
    const [reasonForDelay, setReasonForDelay] = useState("");

    // System Fields States
    const [createdBy, setCreatedBy] = useState("Current User");
    const [createdDate, setCreatedDate] = useState(new Date());
    const [lastModifiedBy, setLastModifiedBy] = useState("Current User");
    const [lastModifiedDate, setLastModifiedDate] = useState(new Date());

    // Notes State
    const [notes, setNotes] = useState("");

    // Document states
    const [displayDialog, setDisplayDialog] = useState(false);
    const [documents, setDocuments] = useState([{
        type: "Project Requirements",
        subject: "Initial project requirements document",
        file: null
    }]);
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [subject, setSubject] = useState('');
    const [file, setFile] = useState(null);
    const [selectedStatus1, setSelectedStatus1] = useState(null);

    const handleUpload = (e) => {
        setFile(e.files[0]);
    };

    const customBase64Uploader2 = (event) => {
        setFile(event.files[0]);
    };

    const handleAddDocument = () => {
        if (selectedDocument && subject) {
            const newDocument = { type: selectedDocument.label, subject, file };
            setDocuments([...documents, newDocument]);
            alert('Document added successfully!');
            setDisplayDialog(false);
            setSelectedDocument(null);
            setSubject('');
            setFile(null);
        } else {
            alert('Please fill all the fields.');
        }
    };

    const openAddDocumentDialog = () => {
        setDisplayDialog(true);
    };

    const closeAddDocumentDialog = () => {
        setDisplayDialog(false);
    };

    const groupedDocuments = [
        {
            label: 'Project Documentation',
            items: [
                { label: 'Project Requirements Document', value: 'Project Requirements Document' },
                { label: 'Technical Specifications', value: 'Technical Specifications' },
                { label: 'Design Documents', value: 'Design Documents' },
                { label: 'User Stories', value: 'User Stories' },
                { label: 'Test Plans', value: 'Test Plans' }
            ]
        },
        {
            label: 'Legal and Compliance',
            items: [
                { label: 'Project Charter', value: 'Project Charter' },
                { label: 'Stakeholder Agreement', value: 'Stakeholder Agreement' },
                { label: 'Risk Assessment', value: 'Risk Assessment' },
                { label: 'Compliance Documentation', value: 'Compliance Documentation' }
            ]
        },
        {
            label: 'Development Assets',
            items: [
                { label: 'Source Code Documentation', value: 'Source Code Documentation' },
                { label: 'API Documentation', value: 'API Documentation' },
                { label: 'Database Schema', value: 'Database Schema' },
                { label: 'Deployment Guide', value: 'Deployment Guide' }
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

    // WorkType configurations
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
            name: 'On Hold',
            color: '#000000',
            id: 'dnd',
            statuses: ['Pending', 'Processing', 'Completed']
        },
    ];

    // WorkType for Company selection
    const customWorkTypesCompany = [
        {
            name: 'Vitel Global Solutions',
            color: '#000000',
            id: 'vitel',
            statuses: ['Pending', 'Processing', 'Completed']
        },
        {
            name: 'Tech Innovations Ltd.',
            color: '#000000',
            id: 'tech-innovations',
            statuses: ['Pending', 'Processing', 'Completed']
        },
        {
            name: 'Digital Solutions Corp.',
            color: '#000000',
            id: 'digital-solutions',
            statuses: ['Pending', 'Processing', 'Completed']
        },
        {
            name: 'Enterprise Systems Inc.',
            color: '#000000',
            id: 'enterprise-systems',
            statuses: ['Pending', 'Processing', 'Completed']
        }
    ];

    // Dropdown options
    const moduleOptions = [
        { label: 'User Management Module', value: 'user-mgmt' },
        { label: 'Authentication Module', value: 'auth-module' },
        { label: 'Payment Gateway', value: 'payment' },
        { label: 'Reporting Module', value: 'reporting' },
        { label: 'Admin Dashboard', value: 'admin-dash' }
    ];

    const projectStatusOptions = [
        { label: 'Planning', value: 'planning' },
        { label: 'In Progress', value: 'in-progress' },
        { label: 'Testing', value: 'testing' },
        { label: 'On Hold', value: 'on-hold' },
        { label: 'Completed', value: 'completed' },
        { label: 'Cancelled', value: 'cancelled' }
    ];

    // Editor configuration
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

    const calculateWordCount = (text) => {
        const words = text
            .trim()
            .replace(/<[^>]*>/g, "")
            .split(/\s+/);
        return words.filter((word) => word).length;
    };

    const currentWordCount = calculateWordCount(content);

    const handleEditorChange = (e) => {
        const text = e.htmlValue || "";
        if (calculateWordCount(text) <= maxWords) {
            setContent(text);
        }
    };

    // Toast messages
    const toast = useRef(null);

    const showMessage = () => {
        toast.current.show({ severity: 'info', summary: 'Project Saved Successfully' });
    };

    const showCancel = () => {
        toast.current.show({ severity: 'error', summary: 'Cancelled', life: 3000 });
    };

    return (
        <React.Fragment>
            <div className="page-content create-ajob">
                <Container fluid>
                    <div className="page-title-box">
                        <Row className="align-items-center">
                            <Col md={6}>
                                <h1 className="page-title">Create Project</h1>
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item active">
                                        Create a new project with detailed information for effective project management and team coordination.
                                    </li>
                                </ol>
                            </Col>
                            <Col md={6}>
                                <div className="d-flex justify-content-end">
                                    <Toast ref={toast} />
                                    <Link to="/allactive-jobs">
                                        <button type="submit" className="btn btn-success me-2" onClick={showMessage}>
                                            <i className="pi pi-save me-1"></i> Save
                                        </button>
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
                    </div>

                    <Row>
                        {/* Project Information */}
                        <Col xl={4}>
                            <Card className="bg-form">
                                <CardBody>
                                    <h4 className="card-title mb-2">Project Information</h4>
                                    <Row>
                                        <Col xl={12}>
                                            <div>
                                                <Row className="mt-2 align-items-center">
                                                    <Col xl={3}>
                                                        <label htmlFor="projectCode">Project Code</label>
                                                    </Col>
                                                    <Col xl={9}>
                                                        <InputText
                                                            id="projectCode"
                                                            value={projectCode}
                                                            onChange={(e) => setProjectCode(e.target.value)}
                                                            className="w-full"
                                                            style={{ border: '1px solid #ced4da' }}
                                                        />
                                                    </Col>
                                                </Row>

                                                <Row className="mt-2 align-items-center">
                                                    <Col xl={3}>
                                                        <label htmlFor="projectName">Project Name</label>
                                                    </Col>
                                                    <Col xl={9}>
                                                        <InputText
                                                            id="projectName"
                                                            value={projectName}
                                                            onChange={(e) => setProjectName(e.target.value)}
                                                            className="w-full"
                                                            style={{ border: '1px solid #ced4da' }}
                                                        />
                                                    </Col>
                                                </Row>

                                                <Row className="mt-2 align-items-center">
                                                    <Col xl={3}>
                                                        <label htmlFor="module">Module</label>
                                                    </Col>
                                                    <Col xl={9}>
                                                        <WorkType1 initialWorkTypes={customWorkTypes} />
                                                    </Col>
                                                </Row>

                                                <Row className="mt-2 align-items-center">
                                                    <Col xl={3}>
                                                        <label htmlFor="company">Company</label>
                                                    </Col>
                                                    <Col xl={9}>
                                                        <WorkType1 initialWorkTypes={customWorkTypesCompany} />
                                                    </Col>
                                                </Row>

                                                <Row className="mt-2 align-items-center">
                                                    <Col xl={3}>
                                                        <label htmlFor="projectManager">Project Manager</label>
                                                    </Col>
                                                    <Col xl={9}>
                                                        <InputText
                                                            id="projectManager"
                                                            value={projectManager}
                                                            onChange={(e) => setProjectManager(e.target.value)}
                                                            className="w-full"
                                                            style={{ border: '1px solid #ced4da' }}
                                                        />
                                                    </Col>
                                                </Row>

                                                <Row className="mt-2 align-items-center">
                                                    <Col xl={3}>
                                                        <label htmlFor="projectStatus">Project Status</label>
                                                    </Col>
                                                    <Col xl={9}>
                                                        <WorkType1 initialWorkTypes={customWorkTypes5} />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>

                            <Card className="bg-form">
                                <CardBody>
                                    <h4 className="card-title mb-2">Project Timeline</h4>
                                    <Row>
                                        <Col xl={12}>
                                            <div>
                                                <Row className="mt-2 align-items-center">
                                                    <Col xl={3}>
                                                        <label htmlFor="startDate">Start Date</label>
                                                    </Col>
                                                    <Col xl={9}>
                                                        <Calendar
                                                            id="startDate"
                                                            value={startDate}
                                                            onChange={(e) => setStartDate(e.value)}
                                                            dateFormat="dd/mm/yy"
                                                            placeholder="Select start date"
                                                            className="w-full activejobdrop"
                                                            style={{ border: '1px solid #ced4da' }}
                                                            showIcon
                                                        />
                                                    </Col>
                                                </Row>

                                                <Row className="mt-2 align-items-center">
                                                    <Col xl={3}>
                                                        <label htmlFor="endDate">End Date</label>
                                                    </Col>
                                                    <Col xl={9}>
                                                        <Calendar
                                                            id="endDate"
                                                            value={endDate}
                                                            onChange={(e) => setEndDate(e.value)}
                                                            dateFormat="dd/mm/yy"
                                                            placeholder="Select end date"
                                                            className="w-full activejobdrop"
                                                            style={{ border: '1px solid #ced4da' }}
                                                            showIcon
                                                        />
                                                    </Col>
                                                </Row>

                                                <Row className="mt-2 align-items-center">
                                                    <Col xl={3}>
                                                        <label htmlFor="extendedEndDate">Extended End Date</label>
                                                    </Col>
                                                    <Col xl={9}>
                                                        <Calendar
                                                            id="extendedEndDate"
                                                            value={extendedEndDate}
                                                            onChange={(e) => setExtendedEndDate(e.value)}
                                                            dateFormat="dd/mm/yy"
                                                            placeholder="Select extended date"
                                                            className="w-full activejobdrop"
                                                            style={{ border: '1px solid #ced4da' }}
                                                            showIcon
                                                        />
                                                    </Col>
                                                </Row>

                                                <Row className="mt-2 align-items-center">
                                                    <Col xl={3}>
                                                        <label htmlFor="reasonForDelay">Reason for Delay</label>
                                                    </Col>
                                                    <Col xl={9}>
                                                        <InputText
                                                            id="reasonForDelay"
                                                            value={reasonForDelay}
                                                            onChange={(e) => setReasonForDelay(e.target.value)}
                                                            className="w-full"
                                                            style={{ border: '1px solid #ced4da' }}
                                                            placeholder="Optional explanation for delay"
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        {/* Project Description */}
                        <Col xl={4}>
                            <Card className="bg-form screening-que">
                                <CardBody>
                                    <h4 className="card-title mb-3">Project Description</h4>
                                    <div className="add-que-card mb-4">
                                        <Row>
                                            <Col xl={12}>
                                                <Row className="sidebar d-flex align-items-center">
                                                    <Col xl={6}>
                                                        <label htmlFor="description" className="block mb-2">
                                                            Description
                                                        </label>
                                                    </Col>
                                                    <Col lg={6} className="d-flex justify-content-end mt-2">
                                                        <Button color="primary" className="btn btn-primary aibtn">
                                                            <i className="pi pi-star me-1"></i>
                                                            Write with AI
                                                        </Button>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-2 align-items-center">
                                                    <Col xl={12}>
                                                        <div className="p-field mb-0">
                                                            <Editor
                                                                value={content}
                                                                onTextChange={handleEditorChange}
                                                                headerTemplate={header}
                                                                style={{ height: '200px' }}
                                                                className="w-full"
                                                            />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                    <ConfirmDialog />
                                </CardBody>
                            </Card>

                            <Card className="bg-form">
                                <CardBody>
                                    <h4 className="card-title mb-2">System Fields</h4>
                                    <Row>
                                        <Col xl={12}>
                                            <div>
                                                <Row className="mt-2 align-items-center">
                                                    <Col xl={3}>
                                                        <label htmlFor="createdBy">Created By</label>
                                                    </Col>
                                                    <Col xl={9}>
                                                        <InputText
                                                            id="createdBy"
                                                            value={createdBy}
                                                            readOnly
                                                            className="w-full"
                                                            style={{ border: '1px solid #ced4da' }}
                                                        />
                                                    </Col>
                                                </Row>

                                                <Row className="mt-2 align-items-center">
                                                    <Col xl={3}>
                                                        <label htmlFor="createdDate">Created Date</label>
                                                    </Col>
                                                    <Col xl={9}>
                                                        <Calendar
                                                            id="createdDate"
                                                            value={createdDate}
                                                            readOnlyInput
                                                            dateFormat="dd/mm/yy"
                                                            className="w-full activejobdrop"
                                                            style={{ border: '1px solid #ced4da' }}
                                                            showIcon
                                                        />
                                                    </Col>
                                                </Row>

                                                <Row className="mt-2 align-items-center">
                                                    <Col xl={3}>
                                                        <label htmlFor="lastModifiedBy">Last Modified By</label>
                                                    </Col>
                                                    <Col xl={9}>
                                                        <InputText
                                                            id="lastModifiedBy"
                                                            value={lastModifiedBy}
                                                            readOnly
                                                            className="w-full"
                                                            style={{ border: '1px solid #ced4da' }}
                                                        />
                                                    </Col>
                                                </Row>

                                                <Row className="mt-2 align-items-center">
                                                    <Col xl={3}>
                                                        <label htmlFor="lastModifiedDate">Last Modified Date</label>
                                                    </Col>
                                                    <Col xl={9}>
                                                        <Calendar
                                                            id="lastModifiedDate"
                                                            value={lastModifiedDate}
                                                            readOnlyInput
                                                            dateFormat="dd/mm/yy"
                                                            className="w-full activejobdrop"
                                                            style={{ border: '1px solid #ced4da' }}
                                                            showIcon
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        {/* Project Documents & Notes */}
                        <Col xl={4}>
                            <Card className="bg-form">
                                <CardBody>
                                    <h4 className="card-title mb-2">Project Documents</h4>
                                    <Row>
                                        <Col xl={12}>
                                            <div>
                                                <DataTable value={documents} rows={5} className="p-datatable-gridlines"
                                                    emptyMessage={<div className="empty-message-custom">No documents found.</div>}>
                                                    <Column field="type" header="Type" />
                                                    <Column field="subject" header="Subject" />
                                                    <Column field="file" header="Attachment" body={(rowData) => rowData.file ? rowData.file.name : 'No file'} />
                                                </DataTable>
                                                <div className="block d-flex justify-content-end align-items-center">
                                                    <a color="primary" className="anchr-title mt-3" onClick={openAddDocumentDialog}>
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
                                            <Button color="primary btn-main mr-2" onClick={handleAddDocument}>
                                                Add Document
                                            </Button>
                                            <Button color="btn btn-primary cancel-outlinebtn" onClick={closeAddDocumentDialog}>
                                                <i className="pi pi-times me-1"></i>
                                                Cancel
                                            </Button>
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
                                            <Dropdown
                                                value={selectedDocument}
                                                onChange={(e) => setSelectedDocument(e.value)}
                                                options={groupedDocuments}
                                                optionLabel="label"
                                                optionGroupLabel="label"
                                                optionGroupChildren="items"
                                                optionGroupTemplate={groupedItemTemplate}
                                                className="w-full bgclr"
                                                style={{ border: '1px solid #ced4da' }}
                                                placeholder="Select a Document"
                                            />
                                        </Col>
                                    </Row>

                                    <Row className="mt-2 align-items-center">
                                        <Col xl={3}>
                                            <label htmlFor="subject" className="block mb-2">
                                                Description
                                            </label>
                                        </Col>
                                        <Col xl={9}>
                                            <InputText
                                                id="subject"
                                                value={subject}
                                                onChange={(e) => setSubject(e.target.value)}
                                                className="w-full"
                                                style={{ border: '1px solid #ced4da' }}
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
                                                accept="*/*"
                                                maxFileSize={1000000}
                                                onUpload={handleUpload}
                                                customUpload
                                                uploadHandler={customBase64Uploader2}
                                                className="custom-fileupload"
                                            // style={{ border: '1px solid #ced4da' }}
                                            />
                                        </Col>
                                    </Row>
                                </Dialog>
                            </Card>

                            <Card className="bg-form">
                                <CardBody>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h4 className="card-title mb-0">Notes</h4>
                                    </div>
                                    <Row>
                                        <Col xl={12}>
                                            <div>
                                                <Row className="mt-2 align-items-center">
                                                    <Col xl={12}>
                                                        <textarea
                                                            id="notes"
                                                            value={notes}
                                                            onChange={(e) => setNotes(e.target.value)}
                                                            className="form-control w-full"
                                                            style={{
                                                                border: '1px solid #ced4da',
                                                                resize: 'vertical',
                                                                minHeight: "120px"
                                                            }}
                                                            rows={6}
                                                            placeholder="Add any additional notes here..."
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="align-items-center mb-3">
                        <Col md={12}>
                            <div className="d-flex justify-content-end">
                                <Link to="/allactive-jobs">
                                    <button type="submit" className="btn btn-success me-2" onClick={showMessage}>
                                        <i className="pi pi-save me-1"></i>Save
                                    </button>
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
                </Container>
            </div>
        </React.Fragment>
    )
}

export default CandidateEditForm;