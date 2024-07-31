"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useEffect, useState } from "react";

import { DollarSign } from "lucide-react";
import Image from "next/image";

export default function Charts() {
  const [selected, setSelected] = useState("all");

  const [pitchList, setPitchList] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOnOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const imageList = [
    "https://img.freepik.com/free-photo/american-football-field_23-2151117450.jpg",
    "https://media.istockphoto.com/id/531912354/photo/dramatic-american-football-stadium.webp?b=1&s=170667a&w=0&k=20&c=RvqnYC5fp9XiYIoHFf3p-x5h0qmmzgCRzEbc9OwZvU4=",
    "https://images.unsplash.com/photo-1522778034537-20a2486be803?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1623953695613-2849a9cbd9b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1714213450890-3f465d40ed46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const getRandomImageUrl = () => {
    return imageList[Math.floor(Math.random() * imageList.length)];
  };

  return (
    <div className="container flex flex-col flex-wrap items-center justify-center sm:flex-row sm:p-8">
      <div className="m-w-[1400px] flex my-2 sticky top-2 z-10 bg-white p-2 border rounded-xl">
        <ToggleGroup
          variant="outline"
          type="single"
          size="sm"
          value={selected}
          onValueChange={(value) => {
            if (value) setSelected(value);
          }}
        >
          <ToggleGroupItem value="all" aria-label="Toggle strikethrough">
            All
          </ToggleGroupItem>
          <ToggleGroupItem value="soccer" aria-label="Toggle strikethrough">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/53/53283.png"
              width={24}
              height={24}
              alt="strikethrough"
            />
          </ToggleGroupItem>
          <ToggleGroupItem value="tennis" aria-label="Toggle italic">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2528/2528207.png"
              width={24}
              height={24}
              alt="strikethrough"
            />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((index) => (
          <Card key={index} className="hover:cursor-pointer w-full max-w-sm" onClick={handleOnOpenDialog}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <div className="flex items-center gap-0 text-muted-foreground">
                12 <DollarSign className="h-4 w-4 " />
              </div>
            </CardHeader>
            <CardContent>
              <Image
                src={getRandomImageUrl()}
                width={400}
                height={300}
                alt="football"
                className="rounded-2xl my-2 md:max-h-[200px] object-cover max-h-[130px]"
              />
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
