import { Button } from "@/src/components/ui/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";
import React from "react";
import {
  Facebook, Instagram, Linkedin, Twitter
} from "@/src/components/elements/Icon";
import MutedPara from "@/src/components/ui/typography/MutedPara/page";
export default function SocialLinks() {
  return (
    <div className="flex justify-start space-x-4 p-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="transition-colors duration-300 hover:bg-accent/90"
            >
              <Facebook className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <MutedPara>Facebook</MutedPara>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="transition-colors duration-300 hover:bg-accent/90"
            >
              <Twitter className="h-4 w-4 text-sky-500 dark:text-sky-400" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <MutedPara>Twitter</MutedPara>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="transition-colors duration-300 hover:bg-accent/90"
            >
              <Instagram className="h-4 w-4 text-pink-600 dark:text-pink-400" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <MutedPara>Instagram</MutedPara>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="transition-colors duration-300 hover:bg-accent/90"
            >
              <Linkedin className="h-4 w-4 text-blue-700 dark:text-blue-500" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <MutedPara>LinkedIn</MutedPara>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
