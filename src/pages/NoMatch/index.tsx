import { Button, Card, DisplayLabel, Emoji, Layout } from "@/components";
import { AppRoutes } from "@/types";
import { useNavigate } from "react-router-dom";

const NoMatch = () => {
  const navigate = useNavigate()
  
  const handleGoBack = () => {
    navigate(AppRoutes.MAIN)
  }

  return (
    <Layout>
      <Card>
        <DisplayLabel>
          <Emoji symbol='😦' label="page not found" />
          &nbsp;
          <p>Page not found</p>
        </DisplayLabel>
        <Button
          onClick={handleGoBack}
          aria-label="Go to landing button"
        >
          Go to landing
        </Button>
      </Card>
    </Layout>
  );
}

export default NoMatch;