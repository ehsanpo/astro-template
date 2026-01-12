import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Bot } from "lucide-react";
import { liteClient as algoliasearch } from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import { chat } from "instantsearch.js/es/widgets";
import { generateSound } from "../utils/sounds";

const searchClient = algoliasearch(
	import.meta.env.PUBLIC_ALGOLIA_APP_ID || "",
	import.meta.env.PUBLIC_ALGOLIA_SEARCH_API_KEY || ""
);

export default function ChatBox() {
	const [isOpen, setIsOpen] = useState(false);
	const chatContainerRef = useRef<HTMLDivElement>(null);
	const searchInstance = useRef<any>(null);

	useEffect(() => {
		const handleOpenChat = () => setIsOpen(true);
		window.addEventListener("open-chat", handleOpenChat);
		return () => window.removeEventListener("open-chat", handleOpenChat);
	}, []);

	useEffect(() => {
		if (isOpen && chatContainerRef.current) {
			if (!searchInstance.current) {
				searchInstance.current = instantsearch({
					indexName: import.meta.env.PUBLIC_ALGOLIA_INDEX_NAME || "Portfolio",
					searchClient,
				});

				searchInstance.current.addWidgets([
					chat({
						container: chatContainerRef.current,
						agentId: "8f7c4a2d-3b1e-4d5f-9a6c-e2b1f5d0c3e9",
					}),
				]);

				searchInstance.current.start();
			}
		} else {
			if (searchInstance.current) {
				searchInstance.current.dispose();
				searchInstance.current = null;
			}
		}

		return () => {
			if (searchInstance.current) {
				searchInstance.current.dispose();
				searchInstance.current = null;
			}
		};
	}, [isOpen]);

	return (
		<div className="fixed bottom-6 right-6 z-[100] font-sans" data-game-ignore>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 20, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 20, scale: 0.95 }}
						className="mb-4 flex h-[400px] w-[350px] flex-col overflow-hidden overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-neutral-900 sm:w-[400px]"
					>
						{/* Header */}
						<div className="flex items-center justify-between bg-primary-600 p-4 text-white">
							<div className="flex items-center gap-3">
								<div className="relative">
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
										<Bot size={24} />
									</div>
									<span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-primary-600 bg-green-500"></span>
								</div>
								<div>
									<h3 className="font-basement text-sm font-bold">Recruiter Assistant</h3>
									<p className="text-xs opacity-80">Online | Algolia AI Chat</p>
								</div>
							</div>
							<button
								onClick={() => setIsOpen(false)}
								className="rounded-full p-1 transition-colors hover:bg-white/20"
							>
								<X size={20} />
							</button>
						</div>

						{/* Chat Widget Container */}
						<div className="flex-1 overflow-y-auto p-2">
							<div ref={chatContainerRef} className="ais-Chat-custom h-full" />
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Toggle Button */}
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={() => {
					try {
						generateSound("click");
					} catch (e) {}
					setIsOpen(!isOpen);
				}}
				className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg transition-shadow hover:shadow-primary-500/50"
			>
				{isOpen ? <X size={28} /> : <MessageSquare size={28} />}
			</motion.button>

			<style
				dangerouslySetInnerHTML={{
					__html: `
				.ais-Chat svg{
					width:16px;
					height:16px;
				}
				.ais-ChatPrompt-disclaimer {
					font-size: 12px !important;
					margin-top: 4px !important;
				}
					.ais-ChatPrompt-body {
						display: flex !important;
					}
				.ais-ChatPrompt-actions {
					margin-left: 8px !important;
					border: 1px solid #777 !important;
					border-radius: 2px !important;
				}
				
				.ais-ChatMessage {
					font-size: 16px !important;
					padding: 8px  !important;
					line-height: 1.4 !important;
					border: 1px solid #999 !important;
					border-radius: 8px !important;
					margin-bottom: 8px !important;
					background-color: #4f46e5 !important;
					color: white !important;
					border-color: #4f46e5 !important;
				}
				.ais-ChatMessage--right {
					text-align: right !important;
				}
				.ais-ChatMessage--left {
					text-align: left !important;
				}
				.ais-ChatHeader {
					
					display: flex;
					justify-content: space-between;
				}
				
				.ais-ChatHeader-icon svg {
					fill: white !important;
				}
				.ais-ChatPrompt {
					padding: 10px !important;
					border-top: 1px solid #333 !important;
				}
				.ais-ChatPrompt-body textarea {
					resize: none !important; 
					background-color:#000;
					width:100%;
					border:1px solid #777;
					padding:8px;
					border-radius:4px;
					font-size:14px;
					color:#fff;
				}
				.ais-ChatHeader-title {
					font-size: 16px !important;
					font-weight: 600 !important;
					display: flex;
					align-items: center;
					gap: 6px;
				}
				.ais-ChatHeader-titleIcon svg {
					width: 16px !important;
				}
				.ais-Chat-custom .ais-Chat {
					display: flex;
					flex-direction: column;
					height: 100%;
				}
				.ais-Chat-custom .ais-Chat-list {
					flex: 1;
					overflow-y: auto;
					padding: 10px;
					list-style: none;
				}
				.ais-Chat-custom .ais-Chat-form {
					display: flex;
					padding: 10px;
					border-top: 1px solid #eee;
				}
				.ais-Chat-custom .ais-Chat-input {
					flex: 1;
					padding: 8px 12px;
					border-radius: 20px;
					border: 1px solid #ddd;
					outline: none;
				}
				.ais-Chat-custom .ais-Chat-submit {
					margin-left: 8px;
					background: #4f46e5;
					color: white;
					border: none;
					border-radius: 50%;
					width: 36px;
					height: 36px;
					cursor: pointer;
				}
				.ais-Chat-custom .ais-Chat-message {
					margin-bottom: 12px;
					max-width: 80%;
					padding: 8px 12px;
					border-radius: 12px;
					font-size: 14px;
					word-wrap: break-word;
				}
				.ais-Chat-custom .ais-Chat-message--user {
					margin-left: auto;
					background: #4f46e5;
					color: white;
				}
				.ais-Chat-custom .ais-Chat-message--bot {
					margin-right: auto;
					background: #f3f4f6;
					color: #1f2937;
				}
				.dark .ais-Chat-custom .ais-Chat-message--bot {
					background: #262626;
					color: #e5e7eb;
				}
				.dark .ais-Chat-custom .ais-Chat-input {
					background: #262626;
					border-color: #404040;
					color: white;
				}
				.dark .ais-Chat-custom .ais-Chat-form {
					border-top-color: #404040;
				}
			`,
				}}
			/>
		</div>
	);
}
