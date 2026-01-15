import { AvatarGenerationDrawer } from "@/widgets";
import {
  Button,
  ButtonVariant
} from "@/shared/ui";

function App() {

  return (
    <div className="flex min-h-screen items-center justify-center gap-4 bg-gray-50">
      <div className="text-center space-y-4">
        <h1 className="mb-4 text-2xl font-bold">Avatar Background Generator</h1>
        
        <AvatarGenerationDrawer>
          <Button variant={ButtonVariant.DEFAULT}>Change Background</Button>
        </AvatarGenerationDrawer>
      </div>
    </div>
  );
}

export default App;
