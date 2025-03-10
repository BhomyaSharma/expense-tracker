"use client";

import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../../../../../components/ui/dialog";
import EmojiPicker from "emoji-picker-react";

const CreateBudget = () => {
    const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
    const [emojiIcon, setEmojiIcon] = useState("💰"); // Default emoji
    const [name, setName] = useState(""); // Controlled input
    const [amount, setAmount] = useState(""); // Controlled input
    const [showUpgradeAlert, setShowUpgradeAlert] = useState(false);

    return (
        <div className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-pink-600 font-medium my-2">Create New Budget</h2>
            
            {/* Input for Name */}
            <div className="mb-3">
                <label className="block text-gray-600">Budget Name</label>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter budget name"
                />
            </div>

            {/* Input for Amount */}
            <div className="mb-3">
                <label className="block text-gray-600">Budget Amount</label>
                <input 
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter budget amount"
                />
            </div>

            {/* Emoji Picker */}
            <div className="relative mb-3">
                <label className="block text-gray-600">Choose an Emoji</label>
                <button
                    className="p-2 border rounded-md flex items-center space-x-2"
                    onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                >
                    <span className="text-2xl">{emojiIcon}</span>
                    <span className="text-gray-500">Pick an emoji</span>
                </button>

                {openEmojiPicker && (
                    <div className="absolute z-20 bg-white p-2 shadow-md rounded-md">
                        <EmojiPicker
                            onEmojiClick={(e) => {
                                setEmojiIcon(e.emoji);
                                setOpenEmojiPicker(false);
                            }}
                        />
                    </div>
                )}
            </div>

            {/* Submit Button */}
            <Button onClick={() => setShowUpgradeAlert(true)}>Create Budget</Button>

            {/* Upgrade Alert Dialog */}
            <Dialog open={showUpgradeAlert} onOpenChange={setShowUpgradeAlert}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Upgrade Your Plan</DialogTitle>
                        <DialogDescription>
                            <p>You have reached the limit of 4 budgets.</p>
                            <Button onClick={() => window.location.href = "./upgrade"}>
                                Upgrade Now
                            </Button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default CreateBudget;
