FILES="./*.png"
for f in $FILES
do
  echo $f;
  cwebp -q 50 $f -o "${f%.png}.webp"
done

