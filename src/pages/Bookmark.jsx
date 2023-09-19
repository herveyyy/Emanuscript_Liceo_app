import { Avatar, Typography, Card, CardHeader,CardBody, Button } from "@material-tailwind/react";
import AccountTabs from "../components/AccountTabs";
import React from "react";
function Bookmark() {
    return ( 
    <div className="flex justify-center mt-6 min-h-screen">
      <div className="absolute flex justify-center items-center mb-[20rem] px-1">
          <div className="bg-red-800 rounded-full flex justify-center mb-[1rem] py-1 px-1">
              <Avatar src="static/images/khian.png" alt='profile' size="xl"/>
          </div>
          <div className="px-3 italic">
              <h1>Khian Justice A. Abad</h1>
              <h2>kabad37796@liceo.edu.ph</h2>
          </div>
      </div>
   
      <div className="mt-[8rem]">   
      <div className="flex justify-center my-4">
        <AccountTabs/>
        </div>
        <div className="flex flex-wrap  gap-3 justify-center">
        <Card className="w-[35rem] h-[11rem] max-w-[48rem] flex-row">
        <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
        </CardHeader>
        <CardBody>
        <div className="flex justify-between">
        <Typography color="gray" className="mb-1 uppercase text-xs -top-1">
          Department
        </Typography>
        <a href="#" className="inline-block -mt-[1rem]">
          <Button variant="text" className="flex items-center gap-2 text-xs">
            Bookmarked
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21"
              />
            </svg>
          </Button>
        </a>
        </div>
        <Typography color="blue-gray" className="mb-1 text-sm uppercase">
          Title
        </Typography>
        <Typography color="gray" className="mb-8 font-normal text-sm">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses.
        </Typography>
        </CardBody>
        </Card>
        <Card className="w-[35rem] h-[11rem] max-w-[48rem] flex-row">
        <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
        </CardHeader>
        <CardBody>
        <div className="flex justify-between">
        <Typography color="gray" className="mb-1 uppercase text-xs -top-1">
          Department
        </Typography>
        <a href="#" className="inline-block -mt-[1rem]">
          <Button variant="text" className="flex items-center gap-2 text-xs">
            Bookmarked
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21"
              />
            </svg>
          </Button>
        </a>
        </div>
        <Typography color="blue-gray" className="mb-1 text-sm uppercase">
          Title
        </Typography>
        <Typography color="gray" className="mb-8 font-normal text-sm">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses.
        </Typography>
        </CardBody>
        </Card>
        <Card className="w-[35rem] h-[11rem] max-w-[48rem] flex-row">
        <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
        </CardHeader>
        <CardBody>
        <div className="flex justify-between">
        <Typography color="gray" className="mb-1 uppercase text-xs -top-1">
          Department
        </Typography>
        <a href="#" className="inline-block -mt-[1rem]">
          <Button variant="text" className="flex items-center gap-2 text-xs">
            Bookmarked
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21"
              />
            </svg>
          </Button>
        </a>
        </div>
        <Typography color="blue-gray" className="mb-1 text-sm uppercase">
          Title
        </Typography>
        <Typography color="gray" className="mb-8 font-normal text-sm">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses.
        </Typography>
        </CardBody>
        </Card>
        <Card className="w-[35rem] h-[11rem] max-w-[48rem] flex-row">
        <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
        </CardHeader>
        <CardBody>
        <div className="flex justify-between">
        <Typography color="gray" className="mb-1 uppercase text-xs -top-1">
          Department
        </Typography>
        <a href="#" className="inline-block -mt-[1rem]">
          <Button variant="text" className="flex items-center gap-2 text-xs">
            Bookmarked
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21"
              />
            </svg>
          </Button>
        </a>
        </div>
        <Typography color="blue-gray" className="mb-1 text-sm uppercase">
          Title
        </Typography>
        <Typography color="gray" className="mb-8 font-normal text-sm">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses.
        </Typography>
        </CardBody>
        </Card>
        <Card className="w-[35rem] h-[11rem] max-w-[48rem] flex-row">
        <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
        </CardHeader>
        <CardBody>
        <div className="flex justify-between">
        <Typography color="gray" className="mb-1 uppercase text-xs -top-1">
          Department
        </Typography>
        <a href="#" className="inline-block -mt-[1rem]">
          <Button variant="text" className="flex items-center gap-2 text-xs">
            Bookmarked
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21"
              />
            </svg>
          </Button>
        </a>
        </div>
        <Typography color="blue-gray" className="mb-1 text-sm uppercase">
          Title
        </Typography>
        <Typography color="gray" className="mb-8 font-normal text-sm">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses.
        </Typography>
        </CardBody>
        </Card>
        <Card className="w-[35rem] h-[11rem] max-w-[48rem] flex-row">
        <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
        </CardHeader>
        <CardBody>
        <div className="flex justify-between">
        <Typography color="gray" className="mb-1 uppercase text-xs -top-1">
          Department
        </Typography>
        <a href="#" className="inline-block -mt-[1rem]">
          <Button variant="text" className="flex items-center gap-2 text-xs">
            Bookmarked
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21"
              />
            </svg>
          </Button>
        </a>
        </div>
        <Typography color="blue-gray" className="mb-1 text-sm uppercase">
          Title
        </Typography>
        <Typography color="gray" className="mb-8 font-normal text-sm">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses.
        </Typography>
        </CardBody>
        </Card>
        </div>
      </div>
    </div>
    );
}

export default Bookmark;