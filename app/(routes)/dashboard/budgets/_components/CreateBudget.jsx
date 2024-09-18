"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import EmojiPicker from 'emoji-picker-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { db } from '@/db/drizzle'
import { Budgets } from '@/db/schema'
import { toast } from 'sonner'
import { useUser } from '@clerk/nextjs'
  
function CreateBudget({refreshData}) {

    const [emojiIcon,setEmojiIcon]=useState('');
    const [openEmojiPicker,setOpenEmojiPicker]=useState(false);
    const [name,setName]=useState();
    const [amount,setAmount]=useState();

    const { user } = useUser();
    const onCreateBudget = async () => {
        console.log("creating budget")
        const result = await db.insert(Budgets)
        .values({
            name: name,
            amount: amount,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            icon: emojiIcon
        }).returning({ insertedId: Budgets.id });

        if(result) {
            refreshData();
            toast('New Budget Created!');
        }
    }

    return (
    <div>
        <Dialog>
            <DialogTrigger asChild>
            <div className='bg-pink-100 p-10 rounded-md flex flex-col items-center border-2 border-dashed border-pink-300 cursor-pointer hover:shadow-md hover:shadow-pink-200 transition-shadow duration-300 ease-in-out z-100'>
                <h2 className='text-3xl text-pink-600'>+</h2>
                <h2 className='text-pink-600 font-medium'>Create New Budget</h2>
            </div>
            </DialogTrigger>
            <DialogContent className="bg-white border border-pink-300 p-5 rounded-md shadow-lg shadow-pink-200 sm:max-w-[400px]">
                <DialogHeader>
                    <DialogTitle className="text-pink-600 font-semibold">Create New Budget</DialogTitle>
                    <DialogDescription>
                        <div className='mt-5'>
                            <Button
                                variant="outline"
                                className="text-pink-500 border-pink-500 hover:bg-pink-100 mb-4"
                                onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                            >
                                {emojiIcon || "Select Emoji"}
                            </Button>

                            {openEmojiPicker && (
                                <div className='absolute z-20'>
                                    <EmojiPicker
                                        onEmojiClick={(e) => {
                                            setEmojiIcon(e.emoji);
                                            setOpenEmojiPicker(false);
                                        }}
                                    />
                                </div>
                            )}

                            <div className='mt-4'>
                                <h2 className='text-pink-600 font-medium my-1'>Budget Name</h2>
                                <Input
                                    placeholder="e.g. Home Decor"
                                    className="border-pink-300 focus:ring-pink-500 focus:border-pink-500"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='mt-4'>
                                <h2 className='text-pink-600 font-medium my-1'>Budget Amount</h2>
                                <Input
                                    type="number"
                                    placeholder="e.g. 5000$"
                                    className="border-pink-300 focus:ring-pink-500 focus:border-pink-500"
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button
                            disabled={!(name && amount)}
                            onClick={onCreateBudget}
                            className="bg-pink-500 text-white hover:bg-pink-600 transition-all w-full mt-5 z-[1000]"
                        >
                            Create Budget
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
    )
}

export default CreateBudget;
