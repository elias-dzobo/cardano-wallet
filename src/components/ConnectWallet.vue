<template>
    <div>
      <button class="button-connect" @click="openModal">Connect Wallet</button>
  
      <div v-if="isModalOpen" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <button class="button-connect" @click="setupNami">Nami Wallet</button>
          <button class="button-connect" @click="setupYoroi">Yoroi Wallet</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Lucid } from 'lucid-cardano';
  
  export default {
    data() {
      return {
        isModalOpen: false,
        lucid: null,
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      },
      async setupLucid() {
        try {
          this.lucid = await Lucid.new(
           
          );
        } catch (error) {
          console.error('Error initializing Lucid:', error);
        }
      },
      async setupNami() {
        try {
          this.lucid = await Lucid.new();
          const api = await window.cardano.nami.enable();
          this.lucid.selectWallet(api);
          //const address = await this.lucid.wallet.address();
          //console.log('Connected to Nami wallet:', address);
          this.closeModal();
        } catch (err) {
          console.error('Error connecting to wallet:', err);
        }
      },
      async setupYoroi() {
        try {
          this.lucid = await Lucid.new();
          const api = await window.cardano.yoroi.enable();
          this.lucid.selectWallet(api);
          //const address = await this.lucid.wallet.address();
          //console.log('Connected to Nami wallet:', address);
          this.closeModal();
        } catch (err) {
          console.error('Error connecting to wallet:', err);
        }
      },
      async connectWallet() {
        //await this.setupLucid();
        await this.setupNami();
        await this.setupYoroi();
      },
    },
  };
  </script>
  
  <style>
  .modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: 300px; /* Square modal */
}

.modal-content button {
  background-color: transparent;
  border: none;
  border-radius: 20px; /* Rounded corners */
  padding: 10px 20px; /* Spacious padding */
  font-size: 16px;
  color: green; /* Green lettering */
  cursor: pointer;
  margin-bottom: 10px; /* Spacing between buttons */
}

.modal-content button:hover {
  background-color: rgba(0, 128, 0, 0.1); /* Light green on hover */
}

.close {
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 15px;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

  .button-connect {
  background-color: transparent;
  border: none;
  border-radius: 20px; /* Rounded corners */
  padding: 10px 20px; /* Spacious padding */
  font-size: 16px;
  color: green; /* Green lettering */
  cursor: pointer;
  }

  .button-connect:hover {
  background-color: rgba(0, 128, 0, 0.1); /* Light green on hover */
  }

  </style>
  