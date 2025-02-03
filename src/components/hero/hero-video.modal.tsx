import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function HeroVideoModal({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-full sm:max-w-[90vw] max-h-[90vh] h-full aspect-video p-0 bg-transparent border-none">
        <DialogHeader className="sr-only">
          <DialogTitle>Presentation Video</DialogTitle>
          <DialogDescription>
            This is a presentation video for the AI agency.
          </DialogDescription>
        </DialogHeader>
        <div className="border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl">
          <div className="rounded-2xl bg-zinc-900 md:rounded-2xl h-full">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              className="w-full h-full rounded-2xl"
            ></iframe>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
