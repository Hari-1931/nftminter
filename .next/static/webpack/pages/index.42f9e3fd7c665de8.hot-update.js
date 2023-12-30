"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/NFTMinter.js":
/*!*************************************!*\
  !*** ./src/components/NFTMinter.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _NFTListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NFTListItem */ \"./src/components/NFTListItem.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.js\");\n/* harmony import */ var _util_useMetaplex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/useMetaplex */ \"./src/util/useMetaplex.js\");\n/* harmony import */ var _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @metaplex-foundation/js */ \"./node_modules/@metaplex-foundation/js/dist/esm/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst NFTMinter = ()=>{\n    _s();\n    const [imageFile, setImageFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isMinting, setMinting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [nfts, setNFTs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isFetchingNFTs, setFetchingNFTs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { metaplex: mx } = (0,_util_useMetaplex__WEBPACK_IMPORTED_MODULE_5__.useMetaplex)();\n    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useWallet)();\n    const handleImageChange = (e)=>{\n        setImageFile(e.target.files[0]);\n    };\n    const handleTitleChange = (e)=>{\n        setTitle(e.target.value);\n    };\n    const handleDescriptionChange = (e)=>{\n        setDescription(e.target.value);\n    };\n    const getNFts = async ()=>{\n        if (!wallet.publicKey) {\n            return;\n        }\n        setFetchingNFTs(true);\n        try {\n            const myNfts = await mx.nfts().findAllByOwner({\n                owner: wallet.publicKey.toBase58()\n            });\n            const nftPromises = myNfts.map(async (nft)=>{\n                try {\n                    const response = await fetch(nft.uri);\n                    const data = await response.json();\n                    const nftData = {\n                        imageSrc: data.image,\n                        title: data.name\n                    };\n                    return nftData;\n                } catch (error) {\n                    console.error(error);\n                    throw new Error(\"Error fetching NFT. Please try again later.\");\n                }\n            });\n            const fetchedNFTs = await Promise.all(nftPromises);\n            setNFTs(fetchedNFTs);\n        } catch (error) {\n            console.error(error);\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Error fetching NFT. Please try again later.\");\n        } finally{\n            setFetchingNFTs(false);\n        }\n    };\n    async function uploadNFTURI(nftURI, walletAddress) {\n        try {\n            const myHeaders = new Headers();\n            myHeaders.append(\"Content-Type\", \"application/json\");\n            const raw = JSON.stringify({\n                \"nftURI\": nftURI,\n                \"walletAddress\": walletAddress\n            });\n            const requestOptions = {\n                method: \"POST\",\n                headers: myHeaders,\n                body: raw,\n                redirect: \"follow\"\n            };\n            const response = await fetch(\"http://localhost:3000/api/nft\", requestOptions);\n            const data = await response.text();\n            console.log(\"Response:\", data);\n            return data; // You can handle the response data accordingly in your application\n        } catch (error) {\n            console.error(\"Error:\", error);\n            throw new Error(error); // Throw the error for handling it in your application\n        }\n    }\n    const mintNFT = async ()=>{\n        if (!imageFile) {\n            console.log(\"Error\");\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Please select an image.\");\n            return;\n        }\n        if (!title) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Please enter title.\");\n            return;\n        }\n        try {\n            // Set minting state to true to indicate the start of minting process\n            setMinting(true);\n            const mintingNFT = {\n                imageSrc: \"https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg?w=2000&t=st=1696525327~exp=1696525927~hmac=c3682581bae49534b2f36a36217c3ef633938e5964e9ac7deec3692377d33738\",\n                title: \"Minting\"\n            };\n            setNFTs([\n                mintingNFT,\n                ...nfts\n            ]);\n            try {\n                await new Promise((resolve, reject)=>{\n                    var reader = new FileReader();\n                    const fileData = new Blob([\n                        imageFile\n                    ], {\n                        type: \"image/png\"\n                    });\n                    reader.readAsArrayBuffer(fileData);\n                    reader.onload = async function(event) {\n                        try {\n                            const arrayBuffer = reader.result;\n                            const { uri, metadata } = await mx.nfts().uploadMetadata({\n                                name: title,\n                                description: description,\n                                image: (0,_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_7__.toMetaplexFile)(arrayBuffer, \"image/png\")\n                            });\n                            let mintAddress;\n                            const { nftMinted } = await mx.nfts().create({\n                                uri,\n                                name: title,\n                                sellerFeeBasisPoints: 500\n                            }).then((data)=>{\n                                mintAddress = data.mintAddress.toBase58();\n                                return data;\n                            });\n                            resolve(nftMinted);\n                            console.log(\"Mint Address:\", nftMinted);\n                            try {\n                                const data = await uploadNFTURI(mintAddress, wallet.publicKey.toBase58());\n                                console.log(data);\n                            } catch (error) {\n                                console.error(\"Error uploading metadata or minting NFT:\", error);\n                                reject(error);\n                            }\n                        } catch (error) {\n                            console.error(\"Error uploading metadata or minting NFT:\", error);\n                            reject(error);\n                        }\n                    };\n                });\n            } catch (error) {\n                console.error(\"Error reading image file:\", error);\n                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Error processing image file. Please try again later.\");\n            }\n            const mintedNFT = {\n                imageSrc: URL.createObjectURL(imageFile),\n                title: title\n            };\n            setNFTs([\n                mintedNFT,\n                ...nfts\n            ]);\n            setTitle(\"\");\n            setDescription(\"\");\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"NFT minted successfully!\");\n        } catch (error) {\n            setNFTs(nfts.filter((nft)=>nft.title !== \"Minting\"));\n            console.error(\"Error minting NFT:\", error);\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Error minting NFT. Please try again later.\");\n        } finally{\n            // Reset minting state to false after the minting process is completed or if there's an error\n            setMinting(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getNFts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto mt-8 grid grid-cols-1 gap-4 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Name\",\n                value: title,\n                onChange: handleTitleChange,\n                className: \"p-2 border border-gray-300 rounded\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hari3\\\\OneDrive\\\\Desktop\\\\nftminter\\\\src\\\\components\\\\NFTMinter.js\",\n                lineNumber: 198,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: handleImageChange,\n                accept: \"image/*\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hari3\\\\OneDrive\\\\Desktop\\\\nftminter\\\\src\\\\components\\\\NFTMinter.js\",\n                lineNumber: 207,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"col-span-2 bg-red-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline \".concat(isMinting ? \"opacity-50 cursor-not-allowed\" : \"\"),\n                onClick: mintNFT,\n                disabled: isMinting,\n                children: isMinting ? \"Minting...\" : \"Mint NFT\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hari3\\\\OneDrive\\\\Desktop\\\\nftminter\\\\src\\\\components\\\\NFTMinter.js\",\n                lineNumber: 208,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-left\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        className: \"text-2xl my-4\",\n                        children: \"Available NFTs:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hari3\\\\OneDrive\\\\Desktop\\\\nftminter\\\\src\\\\components\\\\NFTMinter.js\",\n                        lineNumber: 216,\n                        columnNumber: 9\n                    }, undefined),\n                    !isFetchingNFTs ? nfts.length !== 0 ? nfts.map((nft, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NFTListItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            imageSrc: nft.imageSrc,\n                            title: nft.title\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\hari3\\\\OneDrive\\\\Desktop\\\\nftminter\\\\src\\\\components\\\\NFTMinter.js\",\n                            lineNumber: 218,\n                            columnNumber: 11\n                        }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl\",\n                        children: \"Currently empty.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hari3\\\\OneDrive\\\\Desktop\\\\nftminter\\\\src\\\\components\\\\NFTMinter.js\",\n                        lineNumber: 219,\n                        columnNumber: 14\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl\",\n                        children: \"Loading NFTs...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hari3\\\\OneDrive\\\\Desktop\\\\nftminter\\\\src\\\\components\\\\NFTMinter.js\",\n                        lineNumber: 219,\n                        columnNumber: 61\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hari3\\\\OneDrive\\\\Desktop\\\\nftminter\\\\src\\\\components\\\\NFTMinter.js\",\n                lineNumber: 215,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hari3\\\\OneDrive\\\\Desktop\\\\nftminter\\\\src\\\\components\\\\NFTMinter.js\",\n        lineNumber: 197,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NFTMinter, \"qqdlzX0nVDqGSJlGjYfrStEXGA0=\", false, function() {\n    return [\n        _util_useMetaplex__WEBPACK_IMPORTED_MODULE_5__.useMetaplex,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useWallet\n    ];\n});\n_c = NFTMinter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NFTMinter);\nvar _c;\n$RefreshReg$(_c, \"NFTMinter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNcEIsTUFBSztnQkFBT3NCLFVBQVU3RTtnQkFBbUI4RSxRQUFPOzs7Ozs7MEJBQ3ZELDhEQUFDQztnQkFDQ0wsV0FBVyw0SEFBNkssT0FBakR2RixZQUFZLGtDQUFrQztnQkFDckw2RixTQUFTakM7Z0JBQ1RrQyxVQUFVOUY7MEJBRVRBLFlBQVksZUFBZTs7Ozs7OzBCQUU5Qiw4REFBQ3NGO2dCQUFJQyxXQUFVOztvQkFBWTtrQ0FDekIsOERBQUNRO3dCQUFPUixXQUFVO2tDQUFnQjs7Ozs7O29CQUNqQyxDQUFDbkYsaUJBQWtCRixLQUFLOEYsTUFBTSxLQUFLLElBQUk5RixLQUFLeUIsR0FBRyxDQUFDLENBQUNDLEtBQUtxRSxzQkFDckQsOERBQUN4RyxvREFBV0E7NEJBQWEwQyxVQUFVUCxJQUFJTyxRQUFROzRCQUFFN0IsT0FBT3NCLElBQUl0QixLQUFLOzJCQUEvQzJGOzs7O3VEQUNmLDhEQUFDQzt3QkFBRVgsV0FBVTtrQ0FBVTs7Ozs7a0RBQXdCLDhEQUFDVzt3QkFBRVgsV0FBVTtrQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5GO0dBdE5NMUY7O1FBU3FCRiwwREFBV0E7UUFDckJELG1FQUFTQTs7O0tBVnBCRztBQXdOTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ORlRNaW50ZXIuanM/ZTI5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCBORlRMaXN0SXRlbSBmcm9tICcuL05GVExpc3RJdGVtJzsgXHJcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1ldGFwbGV4IH0gZnJvbSBcIi4uL3V0aWwvdXNlTWV0YXBsZXhcIjtcclxuaW1wb3J0IHsgdG9NZXRhcGxleEZpbGUgfSBmcm9tICdAbWV0YXBsZXgtZm91bmRhdGlvbi9qcyc7XHJcblxyXG5jb25zdCBORlRNaW50ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2ltYWdlRmlsZSwgc2V0SW1hZ2VGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc01pbnRpbmcsIHNldE1pbnRpbmddID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuICBjb25zdCBbbmZ0cywgc2V0TkZUc10gPSB1c2VTdGF0ZShbXSk7IFxyXG4gIGNvbnN0IFtpc0ZldGNoaW5nTkZUcywgc2V0RmV0Y2hpbmdORlRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHsgbWV0YXBsZXg6IG14IH0gPSB1c2VNZXRhcGxleCgpO1xyXG4gIGNvbnN0IHdhbGxldCA9IHVzZVdhbGxldCgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbWFnZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRJbWFnZUZpbGUoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRpdGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZURlc2NyaXB0aW9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgZ2V0TkZ0cyA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghd2FsbGV0LnB1YmxpY0tleSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmV0Y2hpbmdORlRzKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgbXlOZnRzID0gYXdhaXQgbXgubmZ0cygpLmZpbmRBbGxCeU93bmVyKHtcclxuICAgICAgICBvd25lcjogd2FsbGV0LnB1YmxpY0tleS50b0Jhc2U1OCgpLFxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgY29uc3QgbmZ0UHJvbWlzZXMgPSBteU5mdHMubWFwKGFzeW5jIChuZnQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChuZnQudXJpKTtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICBjb25zdCBuZnREYXRhID0ge1xyXG4gICAgICAgICAgICBpbWFnZVNyYzogZGF0YS5pbWFnZSxcclxuICAgICAgICAgICAgdGl0bGU6IGRhdGEubmFtZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICByZXR1cm4gbmZ0RGF0YTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGZldGNoaW5nIE5GVC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBjb25zdCBmZXRjaGVkTkZUcyA9IGF3YWl0IFByb21pc2UuYWxsKG5mdFByb21pc2VzKTtcclxuICAgICAgc2V0TkZUcyhmZXRjaGVkTkZUcyk7XHJcbiAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIHRvYXN0LmVycm9yKCdFcnJvciBmZXRjaGluZyBORlQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyk7XHJcbiAgICB9ZmluYWxseXtcclxuICAgICAgc2V0RmV0Y2hpbmdORlRzKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiB1cGxvYWRORlRVUkkobmZ0VVJJLCB3YWxsZXRBZGRyZXNzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICBteUhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICBcclxuICAgICAgY29uc3QgcmF3ID0gSlNPTi5zdHJpbmdpZnkoeyBcIm5mdFVSSVwiOiBuZnRVUkksIFwid2FsbGV0QWRkcmVzc1wiOiB3YWxsZXRBZGRyZXNzIH0pO1xyXG4gIFxyXG4gICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiBteUhlYWRlcnMsXHJcbiAgICAgICAgYm9keTogcmF3LFxyXG4gICAgICAgIHJlZGlyZWN0OiAnZm9sbG93J1xyXG4gICAgICB9O1xyXG4gIFxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9uZnRcIiwgcmVxdWVzdE9wdGlvbnMpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gIFxyXG4gICAgICBjb25zb2xlLmxvZyhcIlJlc3BvbnNlOlwiLCBkYXRhKTtcclxuICBcclxuICAgICAgcmV0dXJuIGRhdGE7IC8vIFlvdSBjYW4gaGFuZGxlIHRoZSByZXNwb25zZSBkYXRhIGFjY29yZGluZ2x5IGluIHlvdXIgYXBwbGljYXRpb25cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTsgLy8gVGhyb3cgdGhlIGVycm9yIGZvciBoYW5kbGluZyBpdCBpbiB5b3VyIGFwcGxpY2F0aW9uXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG5cclxuXHJcbiAgY29uc3QgbWludE5GVCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghaW1hZ2VGaWxlICkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yXCIpO1xyXG4gICAgICB0b2FzdC5lcnJvcignUGxlYXNlIHNlbGVjdCBhbiBpbWFnZS4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYoIXRpdGxlKXtcclxuICAgICAgdG9hc3QuZXJyb3IoJ1BsZWFzZSBlbnRlciB0aXRsZS4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBTZXQgbWludGluZyBzdGF0ZSB0byB0cnVlIHRvIGluZGljYXRlIHRoZSBzdGFydCBvZiBtaW50aW5nIHByb2Nlc3NcclxuICAgICAgc2V0TWludGluZyh0cnVlKTtcclxuXHJcbiAgICAgIGNvbnN0IG1pbnRpbmdORlQgPSB7XHJcbiAgICAgICAgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vZnJlZS1waG90by9hYnN0cmFjdC1zdXJmYWNlLXRleHR1cmVzLXdoaXRlLWNvbmNyZXRlLXN0b25lLXdhbGxfNzQxOTAtODE4OS5qcGc/dz0yMDAwJnQ9c3Q9MTY5NjUyNTMyN35leHA9MTY5NjUyNTkyN35obWFjPWMzNjgyNTgxYmFlNDk1MzRiMmYzNmEzNjIxN2MzZWY2MzM5MzhlNTk2NGU5YWM3ZGVlYzM2OTIzNzdkMzM3MzhcIiwgLy8gQ3JlYXRlIGEgdGVtcG9yYXJ5IFVSTCBmb3IgdGhlIGltYWdlXHJcbiAgICAgICAgdGl0bGU6ICdNaW50aW5nJywgLy8gUmVwbGFjZSB3aXRoIHRoZSBhY3R1YWwgdHJhbnNhY3Rpb24gaGFzaCBvZiB0aGUgbWludGVkIE5GVFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgc2V0TkZUcyhbbWludGluZ05GVCwgLi4ubmZ0c10pO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgIGNvbnN0IGZpbGVEYXRhID0gbmV3IEJsb2IoW2ltYWdlRmlsZV0sIHsgdHlwZTogJ2ltYWdlL3BuZycgfSk7XHJcbiAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZURhdGEpO1xyXG4gICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgICAgICBjb25zdCB7IHVyaSwgbWV0YWRhdGEgfSA9IGF3YWl0IG14Lm5mdHMoKS51cGxvYWRNZXRhZGF0YSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIGltYWdlOiB0b01ldGFwbGV4RmlsZShhcnJheUJ1ZmZlciwgJ2ltYWdlL3BuZycpLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICBsZXQgbWludEFkZHJlc3M7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIGNvbnN0IHsgbmZ0TWludGVkIH0gPSBhd2FpdCBteC5uZnRzKCkuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIHVyaSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc2VsbGVyRmVlQmFzaXNQb2ludHM6IDUwMCxcclxuICAgICAgICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtaW50QWRkcmVzcyA9IGRhdGEubWludEFkZHJlc3MudG9CYXNlNTgoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUobmZ0TWludGVkKTtcclxuXHJcbiAgXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNaW50IEFkZHJlc3M6XCIsIG5mdE1pbnRlZCk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHVwbG9hZE5GVFVSSShtaW50QWRkcmVzcywgd2FsbGV0LnB1YmxpY0tleS50b0Jhc2U1OCgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgbWV0YWRhdGEgb3IgbWludGluZyBORlQ6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwbG9hZGluZyBtZXRhZGF0YSBvciBtaW50aW5nIE5GVDonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZWFkaW5nIGltYWdlIGZpbGU6JywgZXJyb3IpO1xyXG4gICAgICAgIHRvYXN0LmVycm9yKCdFcnJvciBwcm9jZXNzaW5nIGltYWdlIGZpbGUuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnN0IG1pbnRlZE5GVCA9IHtcclxuICAgICAgICBpbWFnZVNyYzogVVJMLmNyZWF0ZU9iamVjdFVSTChpbWFnZUZpbGUpLFxyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNldE5GVHMoW21pbnRlZE5GVCwgLi4ubmZ0c10pO1xyXG5cclxuICAgICAgc2V0VGl0bGUoJycpO1xyXG4gICAgICBzZXREZXNjcmlwdGlvbignJyk7XHJcblxyXG4gICAgICB0b2FzdC5zdWNjZXNzKCdORlQgbWludGVkIHN1Y2Nlc3NmdWxseSEnKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldE5GVHMobmZ0cy5maWx0ZXIoKG5mdCkgPT4gbmZ0LnRpdGxlICE9PSAnTWludGluZycpKTtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbWludGluZyBORlQ6JywgZXJyb3IpO1xyXG4gICAgICB0b2FzdC5lcnJvcignRXJyb3IgbWludGluZyBORlQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICAvLyBSZXNldCBtaW50aW5nIHN0YXRlIHRvIGZhbHNlIGFmdGVyIHRoZSBtaW50aW5nIHByb2Nlc3MgaXMgY29tcGxldGVkIG9yIGlmIHRoZXJlJ3MgYW4gZXJyb3JcclxuICAgICAgc2V0TWludGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldE5GdHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG10LTggZ3JpZCBncmlkLWNvbHMtMSBnYXAtNCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUaXRsZUNoYW5nZX1cclxuICAgICAgICBjbGFzc05hbWU9XCJwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkXCJcclxuICAgICAgLz5cclxuICBcclxuICAgICAgXHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZUNoYW5nZX0gYWNjZXB0PVwiaW1hZ2UvKlwiIC8+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e2Bjb2wtc3Bhbi0yIGJnLXJlZC01MDAgaG92ZXI6Ymctb3JhbmdlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgJHtpc01pbnRpbmcgPyAnb3BhY2l0eS01MCBjdXJzb3Itbm90LWFsbG93ZWQnIDogJyd9YH1cclxuICAgICAgICBvbkNsaWNrPXttaW50TkZUfVxyXG4gICAgICAgIGRpc2FibGVkPXtpc01pbnRpbmd9XHJcbiAgICAgID5cclxuICAgICAgICB7aXNNaW50aW5nID8gJ01pbnRpbmcuLi4nIDogJ01pbnQgTkZUJ31cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWxlZnQnPiB7LyogQ2VudGVyIGFsaWduIHRleHQgKi99XHJcbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBteS00XCI+QXZhaWxhYmxlIE5GVHM6PC9zdHJvbmc+XHJcbiAgICAgICAgeyFpc0ZldGNoaW5nTkZUcyA/IChuZnRzLmxlbmd0aCAhPT0gMCA/IG5mdHMubWFwKChuZnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8TkZUTGlzdEl0ZW0ga2V5PXtpbmRleH0gaW1hZ2VTcmM9e25mdC5pbWFnZVNyY30gdGl0bGU9e25mdC50aXRsZX0gLz5cclxuICAgICAgICApKSA6IDxwIGNsYXNzTmFtZT1cInRleHQteGxcIj5DdXJyZW50bHkgZW1wdHkuPC9wPikgOiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+TG9hZGluZyBORlRzLi4uPC9wPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTkZUTWludGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInRvYXN0IiwiTkZUTGlzdEl0ZW0iLCJ1c2VXYWxsZXQiLCJ1c2VNZXRhcGxleCIsInRvTWV0YXBsZXhGaWxlIiwiTkZUTWludGVyIiwiaW1hZ2VGaWxlIiwic2V0SW1hZ2VGaWxlIiwiaXNNaW50aW5nIiwic2V0TWludGluZyIsIm5mdHMiLCJzZXRORlRzIiwiaXNGZXRjaGluZ05GVHMiLCJzZXRGZXRjaGluZ05GVHMiLCJ0aXRsZSIsInNldFRpdGxlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsIm1ldGFwbGV4IiwibXgiLCJ3YWxsZXQiLCJoYW5kbGVJbWFnZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImhhbmRsZVRpdGxlQ2hhbmdlIiwidmFsdWUiLCJoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZSIsImdldE5GdHMiLCJwdWJsaWNLZXkiLCJteU5mdHMiLCJmaW5kQWxsQnlPd25lciIsIm93bmVyIiwidG9CYXNlNTgiLCJuZnRQcm9taXNlcyIsIm1hcCIsIm5mdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJ1cmkiLCJkYXRhIiwianNvbiIsIm5mdERhdGEiLCJpbWFnZVNyYyIsImltYWdlIiwibmFtZSIsImVycm9yIiwiY29uc29sZSIsIkVycm9yIiwiZmV0Y2hlZE5GVHMiLCJQcm9taXNlIiwiYWxsIiwidXBsb2FkTkZUVVJJIiwibmZ0VVJJIiwid2FsbGV0QWRkcmVzcyIsIm15SGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJyYXciLCJKU09OIiwic3RyaW5naWZ5IiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInJlZGlyZWN0IiwidGV4dCIsImxvZyIsIm1pbnRORlQiLCJtaW50aW5nTkZUIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJmaWxlRGF0YSIsIkJsb2IiLCJ0eXBlIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJvbmxvYWQiLCJldmVudCIsImFycmF5QnVmZmVyIiwicmVzdWx0IiwibWV0YWRhdGEiLCJ1cGxvYWRNZXRhZGF0YSIsIm1pbnRBZGRyZXNzIiwibmZ0TWludGVkIiwiY3JlYXRlIiwic2VsbGVyRmVlQmFzaXNQb2ludHMiLCJ0aGVuIiwibWludGVkTkZUIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic3VjY2VzcyIsImZpbHRlciIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImFjY2VwdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInN0cm9uZyIsImxlbmd0aCIsImluZGV4IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NFTMinter.js\n"));

/***/ })

});