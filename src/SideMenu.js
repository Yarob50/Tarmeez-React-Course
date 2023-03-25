import TagButton from "./TagButton";

export default function SideMenu() {
  return (
    <div style={{ border: "solid teal 5px" }}>
      <TagButton tagName="جديدة">💫💫💫</TagButton>
      <TagButton tagName="الأكثر قراءة">
        <div>
          <img
            style={{ width: "100px" }}
            src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
          />
        </div>
      </TagButton>

      <TagButton tagName="مقالات مميزة">
        <div>
          <h3>🌟🌟🌟</h3>
          <img
            style={{ width: "100px" }}
            src="https://www.ikea.com/sa/en/images/products/smycka-artificial-flower-rose-red__0903311_pe596728_s5.jpg?f=s"
          />
        </div>
      </TagButton>
    </div>
  );
}
