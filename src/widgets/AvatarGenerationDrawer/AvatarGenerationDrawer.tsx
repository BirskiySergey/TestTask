import { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerTitle,
  DrawerClose,
  Button,
  ButtonVariant,
  ProgressCircle,
} from "@/shared/ui";

import { useDrawer } from "@/shared/hooks";
import { cn } from "@/shared/lib/utils";
import { MOCK_BACKGROUNDS } from "./mockData";
import { X, Undo2, Redo2, Sparkles } from "lucide-react";

const TIMEOUT_GENERATE = 2000;

const AvatarGenerationDrawer = ({ children }: {children: React.ReactNode}) => {
  const { open, setOpen } = useDrawer(false);

  const [isGenerating, setIsGenerating] = useState(false);
  const [value, setValue] = useState("");

  const [backgrounds, setBackgrounds] = useState(MOCK_BACKGROUNDS);

  const handleSetDefaultBackground = (id: number) => {
    setBackgrounds(backgrounds.map((background) => {
      if (background.id === id && !background.isProcessing) {
        return { ...background, isDefault: true };
      }
      return { ...background, isDefault: false };
    }));
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleRegenerate = () => {
    setValue('An image text for regenerate image');
  };

  const handleGenerate = () => {
    if (!value.trim()) return; 
    
    setIsGenerating(true);
  
    const newId = Date.now();
    const newBackground = {
      id: newId,
      image: "",
      isProcessing: true,
    };
    
    setBackgrounds(prev => [newBackground, ...prev]);
    
    setTimeout(() => {
      setIsGenerating(false);
      setValue('');
      const randomSeed = Math.floor(Math.random() * 10000);

      setBackgrounds(prev => prev.map(bg => 
        bg.id === newId 
          ? { 
              ...bg, 
              isProcessing: false, 
              image: `https://picsum.photos/seed/bg${randomSeed}/120/180`
            }
          : bg
      ));
    }, TIMEOUT_GENERATE);
  };
  
  return (
    <Drawer open={open} onOpenChange={setOpen}>
       <DrawerTrigger asChild>
        {children}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex justify-between items-center">
          <DrawerTitle className="font-capsize">Change Background</DrawerTitle>
          <DrawerClose asChild>
            <X className="size-6 shrink-0 cursor-pointer" />
          </DrawerClose>
        </DrawerHeader>
        <DrawerBody>
          <label className="flex items-start flex-col gap-2 mb-6">
            <span className="font-semibold cursor-pointer font-capsize">Background idea</span>
            <div className="w-full border rounded-xl p-4 pb-0 transition-colors border-gray-200 hover:border-gray-300 [&:has(textarea:focus)]:border-gray-400">
              <textarea
                value={value}
                onChange={handleChangeValue}
                placeholder="Describe your background idea..."
                className="min-h-[100px] resize-none w-full border-none outline-none text-sm"
              />

              <div className="flex justify-between items-center pt-2 pb-4">
                <button className="flex items-center gap-2"  onClick={handleRegenerate}>
                  <Sparkles className="w-4 h-4 text-emerald-400" /> <span className="text-sm font-capsize">Regenerate</span>
                </button>

                <div className="flex items-center gap-2">
                  <button className="text-gray-400 hover:text-gray-500 transition-colors">
                    <Undo2 className="w-5 h-5" strokeWidth={1.5} />
                  </button>

                  <button className="text-gray-400 hover:text-gray-500 transition-colors">
                    <Redo2 className="w-5 h-5" strokeWidth={1.5} />
                  </button>
                </div>
              </div>

            </div>
          </label>

          <Button 
            className="mb-8"
            fullWidth 
            variant={ButtonVariant.DEFAULT} 
            prefixElement={<Sparkles className="w-4 h-4 text-emerald-400" />}
            onClick={handleGenerate}
            disabled={isGenerating}
            >
              <span className="font-capsize">Generate BG for 1 credit</span>
          </Button>

          <div className="flex flex-col gap-2">
            <div className="font-semibold font-capsize">Your backgrounds</div>

            <div className="grid grid-cols-3 gap-4">

              {backgrounds.map((background) => {
                const isDefault = background?.isDefault || false;
                const isProcessing = background?.isProcessing || false;

                if (isProcessing) {
                  return (
                    <div key={background.id} className="flex flex-col items-center justify-between p-4 w-full h-48 bg-black text-white rounded-xl">
                      <div />
                      <ProgressCircle value={25} size={70} strokeWidth={3} />
                      <span className="text-sm font-capsize">1 minute left</span>
                    </div>
                  )
                }

                return (
                  <div 
                    key={background.id} 
                    className={cn('relative w-full h-48 bg-black rounded-xl overflow-hidden cursor-pointer', isDefault && 'border-2 border-black')} 
                    onClick={() => handleSetDefaultBackground(background.id)}
                  >
                    
                    {isDefault && (
                      <div className="absolute top-2 left-2 bg-white text-black text-xs leading-none font-medium uppercase px-2 py-1 rounded-md z-10 border border-gray-200">
                        <span className="font-capsize">Default</span>
                      </div>
                    )}
                    
                    <img 
                      src={background.image} 
                      alt="background" 
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default AvatarGenerationDrawer;