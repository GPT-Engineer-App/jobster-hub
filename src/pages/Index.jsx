import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const fetchJobs = async () => {
  // Simulating API call
  return [
    { id: 1, title: 'Frontend Developer', company: 'TechCorp', location: 'Remote' },
    { id: 2, title: 'Backend Engineer', company: 'DataSys', location: 'New York' },
    { id: 3, title: 'UX Designer', company: 'DesignHub', location: 'San Francisco' },
  ];
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: jobs, isLoading, error } = useQuery({ queryKey: ['jobs'], queryFn: fetchJobs });

  const filteredJobs = jobs?.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Job Board</h1>
      <div className="flex gap-4 mb-6">
        <Input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button asChild>
          <Link to="/post-job">Post a Job</Link>
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs?.map(job => (
          <div key={job.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-2">{job.company}</p>
            <p className="text-gray-500 mb-4">{job.location}</p>
            <Button asChild>
              <Link to={`/job/${job.id}`}>View Details</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
