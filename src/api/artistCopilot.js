import {} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export class ArtistCopilot {
  collecionName = "artists";

  async createArtist(image, name) {
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", name);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/artists`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async getArtists() {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/artists`);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async getArtistById(id) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/artists/${id}`
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async updateArtist(image, name, artistId) {
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", name);
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/artists/${artistId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formData,
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async deleteArtist(artistId) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/artists/${artistId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
