import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Button } from "@/components/ui/button"

const fetchJobDetails = async (id) => {
  // Simulating API call
  const jobs = [
    { id: 1, title: 'Frontend Developer', company: 'TechCorp', location: 'Remote', description: 'We are looking for a skilled frontend developer...' },
    { id: 2, title: 'Backend Engineer', company: 'DataSys', location: 'New York', description: 'Seeking an experienced backend engineer...' },
    { id: 3, title: 'UX Designer', company: 'DesignHub', location: 'San Francisco', description: 'Join our team as a UX designer...' },
  ];
  return jobs.find(job => job.id === parseInt(id));
};

const JobDetails = () => {
  const { id } = useParams();
  const { data: job, isLoading, error } = useQuery({ 
    queryKey: ['job', id], 
    queryFn: () => fetchJobDetails(id)
  });

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error.message}</div>;
  if (!job) return <div className="text-center mt-8">Job not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-xl text-gray-600 mb-2">{job.company}</p>
      <p className="text-lg text-gray-500 mb-6">{job.location}</p>
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
        <p className="text-gray-700">{job.description}</p>
      </div>
      <Button>Apply Now</Button>
    </div>
  );
};

export default JobDetails;
