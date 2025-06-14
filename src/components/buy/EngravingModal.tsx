
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

const emojis = ['😀', '😂', '😍', '🤔', '😎', '👍', '✌️', '🤘', '❤️', '⭐', '✨', '⚽️', '🏀', '🏈', '🦄', '👻', '🤖', '👽', '💀', '💩', '😄', '😊', '😉', '🥰', '🥳', '💯', '🔥', '🎉', '👋', '🙏'];

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
            Add a personal touch with free engraving. Type names, initials, numbers, or even add an emoji.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 flex flex-col items-center space-y-4">
          <img src="/lovable-uploads/d93145c9-b665-4286-b586-342c557a9096.png" alt="Product" className="h-48 object-contain" />
          <Input 
            placeholder="YOUR ENGRAVING"
            value={engravingText}
            onChange={(e) => setEngravingText(e.target.value)}
            className="text-center h-12 text-lg tracking-widest uppercase"
            maxLength={30}
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
            <Button type="button" variant="ghost">Cancel</Button>
          </DialogClose>
          <Button type="button" onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
