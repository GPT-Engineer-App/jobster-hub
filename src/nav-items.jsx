import { Home, Briefcase, PlusCircle } from "lucide-react";
import Index from "./pages/Index.jsx";
import JobDetails from "./pages/JobDetails.jsx";
import PostJob from "./pages/PostJob.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Job Details",
    to: "/job/:id",
    icon: <Briefcase className="h-4 w-4" />,
    page: <JobDetails />,
  },
  {
    title: "Post Job",
    to: "/post-job",
    icon: <PlusCircle className="h-4 w-4" />,
    page: <PostJob />,
  },
];
