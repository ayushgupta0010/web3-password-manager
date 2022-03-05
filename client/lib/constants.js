export const contractAddress = "0x38ACb882824ce360aB5218DaD4d489db2e2fafD2";

export const contractABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_url",
        type: "string",
      },
      {
        internalType: "string",
        name: "_username",
        type: "string",
      },
      {
        internalType: "string",
        name: "_password",
        type: "string",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPasswords",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "url",
            type: "string",
          },
          {
            internalType: "string",
            name: "username",
            type: "string",
          },
          {
            internalType: "string",
            name: "password",
            type: "string",
          },
        ],
        internalType: "struct PasswordManager.Password[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_url",
        type: "string",
      },
      {
        internalType: "string",
        name: "_username",
        type: "string",
      },
      {
        internalType: "string",
        name: "_password",
        type: "string",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
