"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PauserRoleMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        constant: true,
        inputs: [],
        name: "onlyPauserMock",
        outputs: [],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "isPauser",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "removePauser",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "renouncePauser",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "addPauser",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "account",
                type: "address",
            },
        ],
        name: "PauserAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "account",
                type: "address",
            },
        ],
        name: "PauserRemoved",
        type: "event",
    },
];
const _bytecode = "0x60806040526100133361001860201b60201c565b610189565b61003081600061006760201b6102bd1790919060201c565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b610077828261010860201b60201c565b156100e357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b038216610169576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806105e26022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61044a806101986000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063329daf901461005c57806346fbf68e146100665780636b2c0f55146100a05780636ef8d66d146100c657806382dc1ec4146100ce575b600080fd5b6100646100f4565b005b61008c6004803603602081101561007c57600080fd5b50356001600160a01b031661013d565b604080519115158252519081900360200190f35b610064600480360360208110156100b657600080fd5b50356001600160a01b0316610155565b610064610161565b610064600480360360208110156100e457600080fd5b50356001600160a01b031661016a565b6100fd3361013d565b61013b57604051600160e51b62461bcd0281526004018080602001828103825260308152602001806103ac6030913960400191505060405180910390fd5b565b600061014f818363ffffffff6101ba16565b92915050565b61015e81610224565b50565b61013b33610224565b6101733361013d565b6101b157604051600160e51b62461bcd0281526004018080602001828103825260308152602001806103ac6030913960400191505060405180910390fd5b61015e8161022d565b60006001600160a01b03821661020457604051600160e51b62461bcd0281526004018080602001828103825260228152602001806103fd6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61015e81610275565b61023e60008263ffffffff6102bd16565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b61028660008263ffffffff61034116565b6040516001600160a01b038216907fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90600090a250565b6102c782826101ba565b1561031c5760408051600160e51b62461bcd02815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b61034b82826101ba565b61038957604051600160e51b62461bcd0281526004018080602001828103825260218152602001806103dc6021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff1916905556fe506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c65526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373a165627a7a723058208e8ff4a98f70328b78165571a5e5cd6f13e77c1901fd60f42018bb5e216e0f7d0029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";
const isSuperArgs = (xs) => xs.length > 1;
class PauserRoleMock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "PauserRoleMock";
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.PauserRoleMock__factory = PauserRoleMock__factory;
PauserRoleMock__factory.bytecode = _bytecode;
PauserRoleMock__factory.abi = _abi;
//# sourceMappingURL=PauserRoleMock__factory.js.map