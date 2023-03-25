import TagButton from "./TagButton";

export default function SideMenu() {
  return (
    <div style={{ border: "solid teal 5px" }}>
      <TagButton title="آخر المقالات">
        <div>
          <span>😀😀😀</span>
        </div>
      </TagButton>

      <TagButton title="الأكثر قراءة">
        <div>
          <img
            style={{ width: "100px" }}
            src="https://www.thespruce.com/thmb/ClRANI4jTWhkGeNhvJtArRhlGSA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-difference-between-trees-and-shrubs-3269804-hero-a4000090f0714f59a8ec6201ad250d90.jpg"
          />
        </div>
      </TagButton>
      <TagButton title="مميز">
        <h1>Click Me</h1>
        <span>👍🏻</span>
      </TagButton>
      <TagButton title="مقالات الأسبوع" />
      {/* <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton /> */}
    </div>
  );
}
