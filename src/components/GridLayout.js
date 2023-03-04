import React, { useState } from "react";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    height: "80%",
    backgroundColor: "white",
    zIndex: "1000",
  },
};

Modal.setAppElement("#root");

const GridLayout = () => {
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addProduct = () => {
    let newProducts = [...products];
    newProducts.push(products);
    setProducts(newProducts);
  };

  const renderFloatingButton = () => {
    return (
      <div className="fixed lg:hidden md:hidden bottom-0 right-0 m-5 z-50">
        <Fab
          icon="&#43;"
          mainButtonStyles={{ backgroundColor: "#1E3A8A" }}
          event="click"
          alwaysShowTitle={true}
          onClick={() => setModalVisible(!modalVisible)}
        >
          <Action
            text="Add Product"
            onClick={() => setModalVisible(!modalVisible)}
            style={{ backgroundColor: "#1E3A8A" }}
          >
            <h1 className="text-7xl font-semibold">+</h1>
          </Action>
        </Fab>
      </div>
    );
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      {/* Modal */}
      <Modal
        style={customStyles}
        isOpen={modalVisible}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className="h-full w-full">
          <div className="flex  mt-1 flex-row items-center justify-between">
            <h1 className="text-lg font-semibold text-black">Add Product</h1>

            <button
              onClick={closeModal}
              className="py-2 px-3 rounded-md hover:bg-gray-200 transition duration-300"
            >
              Close
            </button>
          </div>

          <div className="pt-5">
            <div className="w-full my-5">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md py-2 px-3"
                placeholder="Product Name"
                value={products?.name}
                onChange={(e) =>
                  setProducts({ ...products, name: e.target.value })
                }
              />
            </div>
            <div className="w-full my-5">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md py-2 px-3"
                placeholder="Product Name"
                value={products?.name}
                onChange={(e) =>
                  setProducts({ ...products, name: e.target.value })
                }
              />
            </div>
            <div className="w-full my-5">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md py-2 px-3"
                placeholder="Product Name"
                value={products?.name}
                onChange={(e) =>
                  setProducts({ ...products, name: e.target.value })
                }
              />
            </div>
            <div className="w-full my-5">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md py-2 px-3"
                placeholder="Product Name"
                value={products?.name}
                onChange={(e) =>
                  setProducts({ ...products, name: e.target.value })
                }
              />
            </div>
            <div className="w-full my-5">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md py-2 px-3"
                placeholder="Product Name"
                value={products?.name}
                onChange={(e) =>
                  setProducts({ ...products, name: e.target.value })
                }
              />
            </div>

            <div className="w-full my-5 flex items-end justify-end">
              <button
                onClick={addProduct}
                className="w-36 bg-black text-white py-2 px-3 rounded-md hover:bg-gray-800 transition duration-300 shadow-md"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </Modal>

      {/* FloatingActionBtn */}
      {renderFloatingButton()}

      <div className="h-screen">
        <div class="lg:grid md:grid lg:grid-cols-3 md:grid-cols-3 ">
          <div class="lg:col-span-2 md:col-span-2 px-5 h-fit w-full">
            {/* <div className="py-3 items-center justify-center text-center">
              <h1 className="text-lg font-semibold text-black">Products</h1>
            </div> */}
            <div className="pt-5">
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg border">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-white">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Color
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={index} class="bg-white border-t ">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          Silver
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          Laptop
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          $2999
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          $2999
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="hidden lg:block md:block h-screen w-full px-5 lg:border-l md:border-l border-gray-300 transition duration-300">
            {/* fixed */}
            <div class="">
              {/* <div className="py-3 items-center justify-center text-center">
                <h1 className="text-lg font-semibold text-black">
                  Add Product
                </h1>
              </div> */}

              <div className="pt-5">
                <div className="w-full my-5">
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md py-2 px-3"
                    placeholder="Product Name"
                    value={products?.name}
                    onChange={(e) =>
                      setProducts({ ...products, name: e.target.value })
                    }
                  />
                </div>
                <div className="w-full my-5">
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md py-2 px-3"
                    placeholder="Product Name"
                    value={products?.name}
                    onChange={(e) =>
                      setProducts({ ...products, name: e.target.value })
                    }
                  />
                </div>
                <div className="w-full my-5">
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md py-2 px-3"
                    placeholder="Product Name"
                    value={products?.name}
                    onChange={(e) =>
                      setProducts({ ...products, name: e.target.value })
                    }
                  />
                </div>
                <div className="w-full my-5">
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md py-2 px-3"
                    placeholder="Product Name"
                    value={products?.name}
                    onChange={(e) =>
                      setProducts({ ...products, name: e.target.value })
                    }
                  />
                </div>
                <div className="w-full my-5">
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md py-2 px-3"
                    placeholder="Product Name"
                    value={products?.name}
                    onChange={(e) =>
                      setProducts({ ...products, name: e.target.value })
                    }
                  />
                </div>

                <div className="w-full my-5 flex items-end justify-end">
                  <button
                    onClick={addProduct}
                    className="w-36 bg-black text-white py-2 px-3 rounded-md hover:bg-gray-800 transition duration-300 shadow-md"
                  >
                    Add Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridLayout;
