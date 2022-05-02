# Generated by Django 4.0.3 on 2022-05-02 20:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('customer_id', models.AutoField(primary_key=True, serialize=False)),
                ('email', models.CharField(max_length=255)),
                ('surname', models.CharField(max_length=255)),
                ('other_names', models.CharField(max_length=255)),
                ('phone_number', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=255)),
                ('city', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Developer',
            fields=[
                ('developer_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('genre_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('order_id', models.AutoField(primary_key=True, serialize=False)),
                ('date_ordered', models.DateTimeField(auto_now_add=True)),
                ('date_shipped', models.DateTimeField(auto_now_add=True)),
                ('date_delivered', models.DateTimeField(auto_now_add=True)),
                ('customer_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.customer')),
            ],
        ),
        migrations.CreateModel(
            name='Platform',
            fields=[
                ('platform_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('product_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('short_description', models.CharField(max_length=255)),
                ('long_description', models.CharField(max_length=255)),
                ('image_url', models.CharField(max_length=2083)),
                ('developer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='developer', to='api.developer')),
            ],
        ),
        migrations.CreateModel(
            name='ProductPlatform',
            fields=[
                ('product_platform_id', models.AutoField(primary_key=True, serialize=False)),
                ('price', models.FloatField()),
                ('platform_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='platform', to='api.platform')),
                ('product_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='platforms', to='api.product')),
            ],
        ),
        migrations.CreateModel(
            name='Stock',
            fields=[
                ('stock_id', models.AutoField(primary_key=True, serialize=False)),
                ('product_platform_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.productplatform')),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('review_id', models.AutoField(primary_key=True, serialize=False)),
                ('review', models.CharField(max_length=255)),
                ('rating', models.IntegerField()),
                ('date_reviewed', models.DateTimeField(auto_now_add=True)),
                ('customer_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.customer')),
                ('product_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.product')),
            ],
        ),
        migrations.CreateModel(
            name='ProductGenre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('genre_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='genre', to='api.genre')),
                ('product_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='genres', to='api.product')),
            ],
        ),
        migrations.CreateModel(
            name='OrderDetails',
            fields=[
                ('order_details_id', models.AutoField(primary_key=True, serialize=False)),
                ('order_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.order')),
                ('stock_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.stock')),
            ],
        ),
    ]
