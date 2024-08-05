import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import Link from 'next/link';

const ProjectCard = () => {
  return (
    <Card className="rounded-3xl">
      <Link href={'/'} target="_blank">
        <CardHeader className="hover:bg-primary rounded-3xl">
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
      </Link>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
