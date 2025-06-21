
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface EngravingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialText: string;
  onSave: (text: string) => void;
}

const emojis = ['*', '♡', '♪', '☾', '☀', '!', '+', '*', 'V', '♥', '*', '✓', '✕', '☺', '☹', '-', '>', '○', '◊', '!', '○', '#', '♣', '×'];

export const EngravingModal = ({ isOpen, onClose, initialText, onSave }: EngravingModalProps) => {
  const [engravingText, setEngravingText] = useState(initialText);

  useEffect(() => {
    if (isOpen) {
      setEngravingText(initialText);
    }
  }, [initialText, isOpen]);

  const handleSave = () => {
    onSave(engravingText);
    onClose();
  };

  const handleEmojiClick = (emoji: string) => {
    setEngravingText(prev => prev + emoji);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Personalize your Ximpul</DialogTitle>
          <DialogDescription className="text-center">
            Add a personal touch with engraving. Type names, initials, numbers, or even add an emoji.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 flex flex-col items-center space-y-4">
          <div className="relative w-full flex justify-center">
            <img src="/lovable-uploads/ebdaf61f-0e37-42f8-ad1e-a0cf1932b824.png" alt="Product" className="h-48 object-contain" />
            {/* Black rectangle at bottom for engraving text */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-sm flex items-center justify-center">
              <p className="text-white font-mono text-xs break-words text-center px-2">
                {engravingText}
              </p>
            </div>
          </div>
          <Input 
            placeholder="YOUR ENGRAVING"
            value={engravingText}
            onChange={(e) => setEngravingText(e.target.value)}
            className="text-center h-12 text-lg tracking-widest"
            maxLength={10}
          />
          <div className="grid grid-cols-8 gap-2 w-full pt-4">
            {emojis.map((emoji) => (
              <button key={emoji} onClick={() => handleEmojiClick(emoji)} className="text-2xl rounded-md hover:bg-gray-100 p-1 transition-colors">
                {emoji}
              </button>
            ))}
          </div>
        </div>
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button type="button" variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="button" onClick={handleSave} className="bg-black text-white hover:bg-black/90">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
