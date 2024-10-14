import favorite1 from "../Image/favorite-1.jpg";
import favorite2 from "../Image/favorite-2_th.jpg";
import favorite3 from "../Image/favorite-3_th.jpg";
import favorite4 from "../Image/favorite-4_th.jpg";

export default function Image() {
  return (
    <div>
      <a href={favorite1}>
        <img
          src={favorite1}
          alt="Small black bird, black claws, long black slender beak, links to larger version of the image"
        />
      </a>

      <a href={favorite2}>
        <img
          src={favorite2}
          alt="Top half of a pretty bird with bright blue plumage on neck, light colored beak, blue headdress, links to larger version of the image"
        />
      </a>
      <a href={favorite3}>
        <img
          src={favorite3}
          alt="Top half of a large bird with white plumage, very long curved narrow light colored break, links to larger version of the image"
        />
      </a>
      <a href={favorite4}>
        <img
          src={favorite4}
          alt="Large bird, mostly white plumage with black plumage on back and rear, long straight white beak, links to larger version of the image"
        />
      </a>
    </div>
  );
}
